import "./Board.css";

import Column from "../Column/Column";
import { useEffect, useState } from "react";
import fetchCards from "../../utils/fetchCards";
import sortCards from "../../utils/sortCards";

import testCardObj from "../../utils/testCardObj";

export default function Board() {
    const [cards, setCards] = useState('');

    const currentUser = "TERTIARY USER";

    useEffect(()=> {
        fetchCards(currentUser).then(success => {
            if (success !== cards) {
                setCards(success);
            }
        })
    }, [])

    // if (cards) {
    // console.log(cards);} // Runs on initial render AND on fetch completion so need if(cards) conditional

    if (cards) {
        let x = sortCards('Priority', cards);
        console.log('x: ', x);
        console.log(x[1].time)
    }

    const backlog = [{"name": "Edit Cards in Place", "id": 14, "text": "Enable card editing... Edit entry in DB?", "change": "9/6 @ 6:23PM by Me"},
        {'name': 'Drag Cards to Move', 'id': 1, "text": "Make it possible to click and drag cards", "change": "9/4 @ 5:22PM by Me"},
     {'name': 'Mobile Styling', 'id': 2, "text": "Instead of Columns one after another, make them into tabs", "change": "9/4 @ 5:22PM by Me"},];
    const priority = [{"name": "Move Cards", "id": 13, "text": "Enable links to move... Edit entry in DB?", "change": "9/6 @ 6:23PM by Me"},
    {"name": "Firebase Auth", "id": 11, "text": "Get auth working so the app is actually usable", "change": "9/6 @ 6:23PM by Me"}];
    const in_progress = [{"name": "Display cards from Db", "id": 10, "text": "utilize fetch fxn and setup logic to make cards render bassed on db info", "change": "9/6 @ 6:23PM by Me"}];
    const complete = [{'name': 'Connect to Firestore', 'id': 3, "text": "Connect the App to Firestore inc read/write for cards. Start w/ 1 user", "change": "9/4 @ 5:22PM by Me"}, {'name': 'Setup Project', 'id': 5, "text": "Create app and cleanup the template.", "change": "9/4 @ 5:22PM by Me"},
     {'name': 'Make Board', 'id': 4, "text": "Create the basic structure of the board. Title + Columns (Backlog, Priority, In Progress, Complete)", "change": "9/4 @ 5:22PM by Me"}];

    // console.log(backlog, priority, in_progress, complete)

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <Column colName='Backlog' colColor='' colItems={backlog} />
                </div>
                <div className="col-sm">
                    <Column colName='Priority' colColor='warning' colItems={priority} />
                </div>
                <div className="col-sm">
                    <Column colName='In Progress' colColor='info' colItems={in_progress} />
                </div>
                <div className="col-sm">
                    <Column colName='Complete' colColor='' colItems={complete} />
                </div>
            </div>
        </div>
    )
}
