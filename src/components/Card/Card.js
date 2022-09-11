import { useState } from "react";

import changeCard, { DEL, MOVE, EDIT } from "../../utils/changeCard";

import "./Card.css";

export default function Card({ card, colColor, forceUpdate }) {
    const [showDel, setShowDel] = useState(false);

    const handleDelete = () => {
        changeCard(DEL, card.id).then(
            forceUpdate()
        );
        console.log('Deleting: ', card);
    }

    const handleMove = (location) => {
        changeCard(MOVE, card.id, {"location": `${location}`})
    }

    const handleEdit = () => {
        changeCard(EDIT, card.id)
    }

    const showTrash = (cardId) => {
        if (showDel) {
            return (<img src="/trash3.svg" className="deleteCard" onClick={handleDelete} alt="Delete card" />)
        }
    }

    return (
        <div className={`card bg-${colColor}`}>
            <div className="card-body" id={`${card.id}`}>
                <h5 className="card-title">{ card.title } <img src="/pencil.svg" alt="edit card" onClick={handleEdit} /></h5>
                <h6 className="card-subtitle mb-2 text-muted">{ card.time }</h6>
                <p className="card-text">{ card.text }</p>
                <div className="cardLinks">
                  <button onClick={() => {handleMove("backlog")}} className="btn">Backlog</button>
                  <button onClick={() => {handleMove("priority")}} className="btn">Priority</button>
                  <button onClick={() => {handleMove("in_progress")}} className="btn"></button>
                  <button onClick={() => {handleMove("complete")}} className="btn">Complete</button>


                    {/* <button onClick={() => {handleMove("backlog")}} className="btn">Backlog</button> */}
                    {/* <button onClick={() => {handleMove("priority")}} className="btn">Priority</button> */}
                    {/* <button onClick={() => {handleMove("in_progress")}} className="btn">WIP</button> */}
                    {/* <button onClick={() => {handleMove("complete")}} className="btn">Complete</button> */}
                </div>
                <button className="btn deleteToggler" onClick={() => setShowDel(!showDel)}>Delete?</button>
                {showTrash()}
            </div>
        </div>
    )
}
