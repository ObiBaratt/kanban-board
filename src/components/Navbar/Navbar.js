import fetchCards from "../../utils/fetchCards"

import { currentUser } from "../../utils/testSettings"

export default function Navbar() {

    const profileClickHandler = () => { // TODO: Change to login/account
        console.log('handling click')
        fetchCards(currentUser)
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <span className="navbar-brand mb-0 h1"><img src="/kanban.svg" width="30" height="30" alt="Kanban Board" /></span>
                <span className="navbar-brand"><h1><em>{currentUser}'s</em> Board</h1></span>
                <span className="navbar-brand" onClick={()=> profileClickHandler()}>
                    <img src="/personIcon.svg" width="30" height="30" alt="Login Btn" />
                </span>
            </div>
        </nav>
    )
}
