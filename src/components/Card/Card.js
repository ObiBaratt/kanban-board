import { useState } from "react";

import { useDrag } from "react-dnd";
import { DragTypes } from "../../utils/DnDConstants";

import deleteCard from "../../utils/deleteCard";

import "./Card.css";

export default function Card({ card, colColor, forceUpdate }) {
    const [{isDragging}, dragRef] = useDrag(() => ({
        type: DragTypes.CARD,
        item: card,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))


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
        <div className={`card bg-${colColor}`}
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.75 : 1,
                cursor: 'move',
              }}>

            <div className="card-body" id={`${card.id}`}>
                <h5 className={`card-title bg-${colColor}`}>{ card.title } <img src="/pencil.svg" alt="edit card" onClick={handleEdit} /></h5>
                    <div className="card-contents">
                    <h6 className="card-subtitle mb-2 text-muted">{ card.time }</h6>
                    <p className="card-text">{ card.text }</p>
                    <button className="btn deleteToggler" onClick={() => setShowDel(!showDel)}>Delete?</button>
                </div>
                {showTrash()}
            </div>
        </div>
    )} else {
        return <></>
    }
}
