import "../Card/Card.css";

export default function ChangeCard({ cardTitle, cardText, colColor }) {
    return (
        <div className={`card`}>
            <div className="card-body">
                <h5 className="card-title">{ cardTitle }</h5>
                <p className="card-text">{ cardText }</p>
            </div>
        </div>
    )
}
