import { addCard } from "../../utils/addCard";
import { useState } from "react";

export default function AddCard({ colName }) {
    const [displayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const currentUser = 'TEST USER';

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted: ', 'title: ', title, 'text: ', text);

        const newCard = {
            "title": title,
            "text": text,
            "time": new Date(),
            "user": currentUser,
            "type": colName,
        }

        setTitle('');
        setText('');
        setDisplayForm(false);

        addCard(newCard);
    }
    if (displayForm) {
        return (
            <div className="addCard">
                <button className="btn btn-primary" onClick={() => setDisplayForm(!displayForm)}>New Card</button>
                <form onSubmit={handleSubmit}>
                    <label>Card Title:
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} ></input>
                    </label>
                    <label>Card Text:
                        <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}></input>
                    </label>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
    )} else {
        return (
            <div className="addCard">
                <button className="btn btn-primary" onClick={() => setDisplayForm(!displayForm)}>New Card</button>
            </div>
        )
    }
}
