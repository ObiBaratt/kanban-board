import { useState } from "react";
import ChangeCard from "../ChangeCard/ChangeCard";

import "./Card.css";

export default function Card({ card, colColor }) {
    const [showDel, setShowDel] = useState(false);

    const DEL = "delete";
    const MOVE = "move";
    const EDIT = "edit";

    const handleDelete = () => {
        // ChangeCard(cardId, DEL, [])
        console.log(card);
    }

    const showTrash = () => {
        if (showDel) {
            return (<img src="/trash3.svg" className="deleteCard" onClick={handleDelete} alt="Delete card" />)
        }
    }

    return (
        <div className={`card bg-${colColor}`}>
            <div className="card-body" id={`${card.id}`}>
                <h5 className="card-title">{ card.title } <img src="/pencil.svg" alt="edit card" /></h5>
                <h6 className="card-subtitle mb-2 text-muted">{ card.time }</h6>
                <p className="card-text">{ card.text }</p>
                <div className="cardLinks">
                    <a href="https://google.com" className="card-link">Backlog</a>
                    <a href="https://google.com" className="card-link">Priority</a>
                    <a href="https://google.com" className="card-link">WIP</a>
                    <a href="https://google.com" className="card-link">Complete</a>
                </div>
                <button className="btn deleteToggler" onClick={() => setShowDel(!showDel)}>Delete?</button>
                {showTrash()}
            </div>
        </div>
    )
}
