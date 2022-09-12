import { useState } from "react";

import { useDrag } from "react-dnd";
import { DragTypes } from "../../utils/DnDConstants";

import EditCard from "../EditCard/EditCard";

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
                <span className="card-head">
                    <h5 className={`card-head-item bg-${colColor}`}>{ card.title }</h5>
                    <span className="card-head-item">
                        <EditCard card={card} forceUpdate={forceUpdate} colColor={colColor}/>
                    </span>
                </span>
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
