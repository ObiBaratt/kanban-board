import fetchCards from "../../utils/fetchCards"

export default function Navbar() {
    const currentUser = "SECONDARY USER";
    const clickHandler = () => {
        console.log('handling click')
        fetchCards(currentUser)
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <span className="navbar-brand mb-0 h1">My Kanban Board</span>
                <span className="navbar-brand" onClick={()=> clickHandler()}>
                    <img src="/personIcon.svg" width="30" height="30" alt="Login Btn" />
                </span>
            </div>
        </nav>
    )
}
