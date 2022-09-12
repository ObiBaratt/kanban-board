import sortCards from "../../utils/sortCards";

import "./Column.css";

import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, cards, forceUpdate }) {

    const colItems = sortCards(colName, cards);

    if (colItems && colItems.length > 0) {
        return (
            <div className={`${colName} boardColumn`}>
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
                <h3>Try Adding a Card.</h3>
            </div>
            )
        }
}
