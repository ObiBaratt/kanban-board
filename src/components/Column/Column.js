import { useDrop } from "react-dnd";
import { DropTypes } from "../../utils/DnDConstants";

import { useRef } from "react";

import sortCards from "../../utils/sortCards";

import "./Column.css";

import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, cards, forceUpdate }) {

    const dropRef = useRef(null);
    const [, drop] = useDrop({
        accept: "Card",
        drop: (item) => {
            console.log(`Dropped item to ${colName}`)
        }
    })
    drop(dropRef);

    const colItems = sortCards(colName, cards);

    if (colItems && colItems.length > 0) {
        return (
            <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
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
