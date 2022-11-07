import { useState } from "react";

import ChangeCard from "../ChangeCard/ChangeCard";

export default function DemoAdd({ colName, colColor, setCards, forceUpdate, cards }) {
    const [displayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const curTime = new Date();

        const newCard = {
            "id": `${curTime.valueOf()}DEMO`,
            "title": title,
            "text": text,
            "time": `${curTime.toLocaleDateString()} @ ${curTime.toLocaleTimeString()}`,
            "user": "demo",
            "type": colName,
        }

        setTitle('');
        setText('');
        setDisplayForm(false);

        setCards([...cards, newCard])

        forceUpdate()

    }

    if (displayForm) {
        return (
            <div className="addCard">
                <div className="card-body">
                <img src="/calendarMinus.svg" width="30" height="30" alt="New Card" onClick={() => setDisplayForm(!displayForm)} />
                    <form className="card" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" value={title} placeholder="New Card Title" onChange={(e) => {setTitle(e.target.value)}} ></input>
                            <br />
                            <input type="text" value={text} placeholder="New Card Text" onChange={(e) => {setText(e.target.value)}}></input>
                            <br />
                            <input className={`btn btn-outline-${colColor}`} type="submit" value="Submit" />
                            <br />
                        </div>
                    </form>
                <ChangeCard cardTitle={title}
                      cardText={text}
                      colColor={colColor} />
                </div>
            </div>
    )} else {
        return (
            <div className="addCard">
                <img src="/calendarPlus.svg" width="30" height="30" alt="New Card" onClick={() => setDisplayForm(!displayForm)} />
            </div>
        )
    }
}
