import { useState } from "react";

import deleteCard from "../../utils/deleteCard";

import "./Card.css";

export default function Card({ card, colColor, forceUpdate }) {
    const [showDel, setShowDel] = useState(false);
    const [displaying, setDisplaying] = useState(true);

    const handleDelete = () => {
        setDisplaying(false);
        deleteCard(card.id).then(
            forceUpdate()
        );
        console.log('Deleting: ', card);
    }

    const handleEdit = () => {
        // editCard(card.id)
        console.log('Editing: ', card.id);
    }

    const showTrash = () => {
        if (showDel) {
            return (<img src="/trash3.svg" className="deleteCard" onClick={handleDelete} alt="Delete card" />)
        }
    }
if (displaying) {
    return (
        <div className={`card bg-${colColor}`}>
            <div className="card-body" id={`${card.id}`}>
                <h5 className="card-title">{ card.title } <img src="/pencil.svg" alt="edit card" onClick={handleEdit} /></h5>
                <h6 className="card-subtitle mb-2 text-muted">{ card.time }</h6>
                <p className="card-text">{ card.text }</p>
                <button className="btn deleteToggler" onClick={() => setShowDel(!showDel)}>Delete?</button>
                {showTrash()}
            </div>
        </div>
    )} else {
        return <></>
    }
}
