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
        console.log("item: ", item);
        console.log("item type: ", item.type);
        console.log("colName: ", colName);


        // let index = cards[item.type].indexOf(item);
        // cards[item.type].splice(index);
        item.type = colName;

        console.log("item after: ", item);
        console.log("item type after: ", item.type);

        // cards[colName].push(item)
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
                                <Card card={item}
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
