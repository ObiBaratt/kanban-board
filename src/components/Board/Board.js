import "./Board.css";

import Column from "../Column/Column";
import { useEffect, useState } from "react";
import fetchCards from "../../utils/fetchCards";
import sortCards from "../../utils/sortCards";

import { currentUser } from "../../utils/testSettings";

export default function Board() {

    function useForceUpdate(){
        return () => setValue(value => value + 1); // update state to force render
    }

    const [value, setValue] = useState(0); // integer state
    const [cards, setCards] = useState('');
    const forceUpdate = useForceUpdate();
    console.log(value);

    useEffect(()=> {
        try {
            fetchCards(currentUser).then(success => {
                setCards(success);

            })
        } catch(e) {console.log(e)};
    }, [value])

    const priority = sortCards('Priority', cards);
    const backlog = sortCards('Backlog', cards);
    const in_progress = sortCards('In Progress', cards);
    const complete = sortCards('Complete', cards);

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <Column cards={cards} forceUpdate={forceUpdate} colName='Backlog' colColor='' colItems={backlog} />
                </div>
                <div className="col-sm">
                    <Column cards={cards} forceUpdate={forceUpdate} colName='Priority' colColor='warning' colItems={priority} />
                </div>
                <div className="col-sm">
                    <Column cards={cards} forceUpdate={forceUpdate} colName='In Progress' colColor='info' colItems={in_progress} />
                </div>
                <div className="col-sm">
                    <Column cards={cards} forceUpdate={forceUpdate} colName='Complete' colColor='' colItems={complete} />
                </div>
            </div>
        </div>
    )
}
