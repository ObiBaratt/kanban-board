import sortCards from "../../utils/sortCards";

import "./Column.css";

import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, cards, forceUpdate }) {

    const colItems = sortCards(colName, cards);

    if (colItems !== undefined) {
        return (
            <div className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <AddCard forceUpdate={forceUpdate} colName={colName} colColor={colColor} />
                {colItems.map(item => {
                    return (
                            <div key={`${item.title}-${item.text}`}>
                                <Card cardTitle={item.title}
                                    cardText={item.text}
                                    cardChange={item.time}
                                    colColor={colColor} />
                            </div>
                    );
                })}
            </div>
        )}
        else {
            return (
                <></>
            )
        }
}
