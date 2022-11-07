import { useDrop } from "react-dnd";

import "../Column/Column.css";

import DemoCard from "./DemoCard";
import DemoAdd from "./DemoAdd";

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

    if (colItems && colItems.length > 0) {
        return (
            <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <span className="addCard">
                    <DemoAdd forceUpdate={forceUpdate} colName={colName} cards={cards} setCards={setCards} />
                </span>
                {isOver && <div>Drop Here!</div>}
                {colItems.map(item => {
                    return (
                        <div key={`${item.id}`}>
                            <DemoCard card={item} colColor={colColor} forceUpdate={forceUpdate} />
                        </div>
                    );
                })}
            </div>
        )}
        else {
            return (
                <div ref={dropRef} className={`${colName} boardColumn`}>
                <h1>{colName}</h1>
                <DemoAdd forceUpdate={forceUpdate} colName={colName} cards={cards} setCards={setCards} />
                {isOver && <h3>Drop Here!</h3>}
            </div>
            )
        }
}
