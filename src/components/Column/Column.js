import "./Column.css";

import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";

export default function Column({ colName, colColor, colItems, addCard }) {
    // <Card cardTitle="Make Board" colColor={colColor} />

    return (
        <div className={`${colName} boardColumn`}>
            <h1>{colName}</h1>
            <AddCard colName={colName} />
            {colItems.map(item => {
                return (
                        <div key={item.id}>
                            <Card cardTitle={item.name}
                                  cardText={item.text}
                                  cardChange={item.change}
                                  colColor={colColor} />
                        </div>
                );
            })}
        </div>
    )
}
