import { useDrop } from "react-dnd";

import "../Column/Column.css";

import Card from "../Card/Card";
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
        const index = cards[item.type].indexOf(item);
        console.log(index);
        cards[item.type].splice(index);
        cards[colName].unshift(item);
        setCards(cards);
        console.log("cards after", cards)
    }

    // TESTING EDITING, DELETING, BUT ADDING DOES NOT WORK...
    // if (cards[0].type === "Priority") {
        // cards[0].title = "TEST";
        // cards.pop();
        // cards.push({"time":"10/19/2022 @ 2:03:56 PM","user":"Demo User","title":"Make time to look at an interesting candidate","id":"c1","text":"Pick one of their projects to investigate to see if they can make interactive webapps.","type":"Complete"});
    // }
    const colItems = cards[colName];

    if (colItems && colItems.length > 0) {
        return (
            <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <span className="addCard">
                    <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
                </span>
                {isOver && <div>Drop Here!</div>}
                {colItems.map(item => {
                    return (
                            <div key={`${item.id}`}>
                                <Card card={item}
                                      colColor={colColor}
                                      forceUpdate={forceUpdate} />
                            </div>
                    );
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
