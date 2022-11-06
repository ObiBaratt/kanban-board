import { useState } from "react";

export default function DemoEditCard({ card, forceUpdate, colColor }) {
    const [displayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState(card.title);
    const [text, setText] = useState(card.text);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Edited: ', 'title: ', title, 'text: ', text);

        setTitle(title);
        setText(text);
        card.title = title;
        card.text = text;

        setDisplayForm(false);

        forceUpdate();
    }


    if (displayForm) {
        return (
            <div className="edit-card">
                <div className="card-body">
                <img src="/pencil.svg" width="20" height="20" alt="New Card" onClick={() => setDisplayForm(!displayForm)} />
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
                </div>
            </div>
    )} else {
        return (
            <div className="edit-card">
                <img src="/pencil.svg" width="20" height="20" alt="Edit Card" onClick={() => setDisplayForm(!displayForm)} />
            </div>
        )
    }
}
