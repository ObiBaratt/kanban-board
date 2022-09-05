import "./Board.css";

import Column from "../Column/Column";

export default function Board() {
    const backlog = [{'name': 'Drag Cards to Move', 'id': 1, "text": "Make it possible to click and drag cards", "change": "9/4 @ 5:22PM by Me"},
     {'name': 'Mobile Styling', 'id': 2, "text": "Instead of Columns one after another, make them into tabs", "change": "9/4 @ 5:22PM by Me"}];
    const priority = [];
    const in_progress = [{'name': 'Connect to Firestore', 'id': 3, "text": "Connect the App to Firestore inc read/write for cards. Start w/ 1 user", "change": "9/4 @ 5:22PM by Me"}];
    const complete = [{'name': 'Setup Project', 'id': 5, "text": "Create app and cleanup the template.", "change": "9/4 @ 5:22PM by Me"},
     {'name': 'Make Board', 'id': 4, "text": "Create the basic structure of the board. Title + Columns (Backlog, Priority, In Progress, Complete)", "change": "9/4 @ 5:22PM by Me"}];

    // console.log(backlog, priority, in_progress, complete)

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <Column colName='Backlog' colColor='' colItems={backlog}/>
                </div>
                <div className="col-sm">
                    <Column colName='Priority' colColor='warning' colItems={priority}/>
                </div>
                <div className="col-sm">
                    <Column colName='In Progress' colColor='info' colItems={in_progress}/>
                </div>
                <div className="col-sm">
                    <Column colName='Complete' colColor='' colItems={complete}/>
                </div>
            </div>
        </div>
    )
}
