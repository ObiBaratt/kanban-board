import { useDrop } from "react-dnd";

import "../Column/Column.css";

import DemoCard from "./DemoCard";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, cards, forceUpdate, setCards }) {

    const [{ isOver }, dropRef] = useDrop({
        accept: "Card",
        drop: (item) => {
            handleMove(item, colName);
            forceUpdate();
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const handleMove = (item) => {
        item.type = colName;

        setCards(cards);
    }

    let colItems = cards.filter((card) => {
        return card.type === colName;
    });

    console.log(colName, colItems);

    if (colItems && colItems.length > 0) {
        return (
            <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <span className="addCard">
                    <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
                </span>
                {isOver && <div>Drop Here!</div>}
                {colItems.map(item => {
                    // if (item.type === colName) {
                        return (
                            <div key={`${item.id}`}>
                                <DemoCard card={item}
                                      colColor={colColor}
                                      forceUpdate={forceUpdate} />
                            </div>
                        );
                    // }
                })}
            </div>
        )}
        else {
            return (
                <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
                {isOver && <h3>Drop Here!</h3>}
            </div>
            )
        }
}
