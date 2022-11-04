import "../Board/Board.css";

import { useState } from "react";

import { priority, backlog, in_progress, complete, demoCardSet } from "../../utils/DemoCards";

import DemoColumn from "./DemoColumn";

export default function DemoBoard() {
    // const [cards, setCards] = useState({
    //     "Priority": priority,
    //     "Backlog": backlog,
    //     "In Progress": in_progress,
    //     "Complete": complete
    // });
    const [cards, setCards] = useState(demoCardSet);

    function useForceUpdate(){
        return () => setValue(value => value + 1); // update state to force render
    }
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // integer state
    const forceUpdate = useForceUpdate();

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Backlog' colColor='' colItems={backlog} />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Priority' colColor='warning' colItems={priority} />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='In Progress' colColor='info' colItems={in_progress} />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Complete' colColor='' colItems={complete} />
                </div>
            </div>
        </div>
    )
}
