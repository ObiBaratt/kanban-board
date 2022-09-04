import "./Card.css";

export default function Card({ cardTitle, colColor }) {

    return (
        <div className={`card bg-${colColor}`}>
            <div className="card-body">
                <h5 className="card-title">{ cardTitle }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://google.com" className="card-link">To Backlog</a>
                <a href="https://google.com" className="card-link">Prioritize</a>
                <a href="https://google.com" className="card-link">Complete</a>
            </div>
        </div>
    )
}
