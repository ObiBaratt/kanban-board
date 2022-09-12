import { useDrop } from "react-dnd";

import sortCards from "../../utils/sortCards";
import moveCard from "../../utils/moveCard";

import "./Column.css";

import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, cards, forceUpdate }) {

    const [{ isOver }, dropRef] = useDrop({
        accept: "Card",
        drop: (item) => {
            console.log(`Dropped ${item.id} to ${colName}`);
            moveCard(item, colName).then(
                forceUpdate()
            );
            console.log('Moved card');
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    const colItems = sortCards(colName, cards);

    if (colItems && colItems.length > 0) {
        return (
            <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
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
                <div className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
                <h3>Add / Drop a Card</h3>
            </div>
            )
        }
}
