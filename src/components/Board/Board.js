import "./Board.css";

import Column from "../Column/Column";

export default function Board() {
    const backlog = [{'name': 'Drag Cards to Move', 'id': 1}, {'name': 'Mobile Styling', 'id': 2}];
    const priority = [];
    const in_progress = [{'name': 'Connect to Firestore', 'id': 3}];
    const complete = [{'name': 'Setup Project', 'id': 5}, {'name': 'Make Board', 'id': 4}];

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
