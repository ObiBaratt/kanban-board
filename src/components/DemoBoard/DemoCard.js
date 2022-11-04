import { useState } from "react";

import { useDrag } from "react-dnd";
import { DragTypes } from "../../utils/DnDConstants";

import EditCard from "./DemoEdit";

import "../Card/Card.css";

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
    }

    const showTrash = () => {
        if (showDel) {
            return (<button className="btn deleteToggler" onClick={handleDelete}>Confirm Delete.</button>)
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
                    <span className="card-head-item">
                        <EditCard card={card} forceUpdate={forceUpdate} colColor={colColor}/>
                    </span>
                    </span>
                    <h5 className={`card-head-item bg-${colColor}`}>{ card.title }</h5>
                <div className="card-contents">
                <h6 className="card-subtitle mb-2 text-muted">{ card.time }</h6>
                <p className="card-text">{ card.text }</p>
                <img src="/trash3.svg" className="deleteCard" onClick={() => setShowDel(!showDel)} alt="Delete card" />
                </div>
                {showTrash()}
            </div>
        </div>
    )} else {
        return <></>
    }
}
