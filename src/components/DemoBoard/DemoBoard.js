import "../Board/Board.css";

import { useState } from "react";

import { demoCardSet } from "../../utils/DemoCards";

import DemoColumn from "./DemoColumn";

export default function DemoBoard() {

    const [cards, setCards] = useState(demoCardSet);

    function useForceUpdate(){
        return () => setValue(value => value + 1);
    }
    // eslint-disable-next-line
    const [value, setValue] = useState(0);
    const forceUpdate = useForceUpdate();

    return (
        <div className="container mainBoard">
            <div className="row">
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Backlog' colColor=''  />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Priority' colColor='warning'  />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='In Progress' colColor='info'  />
                </div>
                <div className="col-sm">
                    <DemoColumn setCards={setCards} cards={cards} forceUpdate={forceUpdate} colName='Complete' colColor=''  />
                </div>
            </div>
        </div>
    )
}
