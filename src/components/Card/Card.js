import "./Card.css";

export default function Card({ cardTitle, cardText, cardChange, colColor }) {

    return (
        <div className={`card bg-${colColor}`}>
            <div className="card-body">
                <h5 className="card-title">{ cardTitle }</h5>
                <h6 className="card-subtitle mb-2 text-muted"><a href="https://google.com" className="editCard">Edited</a>: { cardChange }
                </h6>
                <p className="card-text">{ cardText }</p>
                <div className="cardLinks">
                    <a href="https://google.com" className="card-link">To Backlog</a>
                    <a href="https://google.com" className="card-link">Prioritize</a>
                    <a href="https://google.com" className="card-link">Complete</a>
                </div>
            </div>
        </div>
    )
}
