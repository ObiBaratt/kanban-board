import "./Column.css";

import Card from "../Card/Card";

export default function Column({ colName, colColor, colItems }) {
    // <Card cardTitle="Make Board" colColor={colColor} />

    return (
        <div className={`${colName} boardColumn`}>
            <h1>{colName}</h1>
            {colItems.map(item => {
                return (
                        <div key={item.id}>
                            <Card cardTitle={item.name} colColor={colColor} />
                            <hr />
                        </div>
                );
            })}
        </div>
    )
}
