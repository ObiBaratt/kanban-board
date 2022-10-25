import "../Board/Board.css";

import { useState } from "react";

import { priority, backlog, in_progress, complete } from "../../utils/DemoCards";

import DemoColumn from "./DemoColumn";

export default function DemoBoard() {
    function useForceUpdate(){
        return () => setValue(value => value + 1); // update state to force render
    }
    //
    const [value, setValue] = useState(0); // integer state
    const forceUpdate = useForceUpdate();
    console.log(value);

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <DemoColumn cards={backlog} forceUpdate={forceUpdate} colName='Backlog' colColor='' colItems={backlog} />
                </div>
                <div className="col-sm">
                    <DemoColumn cards={priority} forceUpdate={forceUpdate} colName='Priority' colColor='warning' colItems={priority} />
                </div>
                <div className="col-sm">
                    <DemoColumn cards={in_progress} forceUpdate={forceUpdate} colName='In Progress' colColor='info' colItems={in_progress} />
                </div>
                <div className="col-sm">
                    <DemoColumn cards={complete} forceUpdate={forceUpdate} colName='Complete' colColor='' colItems={complete} />
                </div>
            </div>
        </div>
    )
}
