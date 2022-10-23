import "./Board.css";

import { useEffect, useState } from "react";

import Column from "../Column/Column";
import fetchCards from "../../utils/fetchCards";
import sortCards from "../../utils/sortCards";
import { useNavigate } from "react-router-dom";

export default function Board({ user, demo }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
        navigate("/");
    }
    }, [user, navigate])

    function useForceUpdate(){
        return () => setValue(value => value + 1); // update state to force render
    }

    const [value, setValue] = useState(0); // integer state
    const [cards, setCards] = useState('');
    const forceUpdate = useForceUpdate();

    useEffect(()=> {
        if (user) {
            try {
                fetchCards(user).then(success => {
                    setCards(success);

                })
            } catch(e) {console.log(e)}};
    }, [value, user])

    const priority = sortCards('Priority', cards);
    const backlog = sortCards('Backlog', cards);
    const in_progress = sortCards('In Progress', cards);
    const complete = sortCards('Complete', cards);

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <Column user={user} cards={cards} demo={demo} forceUpdate={forceUpdate} colName='Backlog' colColor='' colItems={backlog} />
                </div>
                <div className="col-sm">
                    <Column user={user} cards={cards} demo={demo} forceUpdate={forceUpdate} colName='Priority' colColor='warning' colItems={priority} />
                </div>
                <div className="col-sm">
                    <Column user={user} cards={cards} demo={demo} forceUpdate={forceUpdate} colName='In Progress' colColor='info' colItems={in_progress} />
                </div>
                <div className="col-sm">
                    <Column user={user} cards={cards} demo={demo} forceUpdate={forceUpdate} colName='Complete' colColor='' colItems={complete} />
                </div>
            </div>
        </div>
    )
}
