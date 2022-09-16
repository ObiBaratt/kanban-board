import { addCard } from "../../utils/addCard";
import { useState } from "react";

import ChangeCard from "../ChangeCard/ChangeCard";

export default function AddCard({ colName, colColor, setCards, forceUpdate, user }) {
    const [displayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    const handleSubmit = (e) => {
        if (!user) {
            return alert("Please Log In");
        }
        e.preventDefault();

        console.log('Submitted: ', 'title: ', title, 'text: ', text);

        const curTime = new Date();

        const newCard = {
            "id": `${curTime.valueOf()}${user}`,
            "title": title,
            "text": text,
            "time": `${curTime.toLocaleDateString()} @ ${curTime.toLocaleTimeString()}`,
            "user": user,
            "type": colName,
        }

        setTitle('');
        setText('');
        setDisplayForm(false);

        addCard(newCard).then(
            forceUpdate()
        );
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
