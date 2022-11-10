import { useNavigate } from "react-router-dom"
import { auth } from "../../utils/firebaseConfig";
import { logout } from "../Login/loginHandler";

export default function Navbar() {
    const navigate = useNavigate();

    const profileClickHandler = () => {
        if (auth.currentUser) {
            logout();
            navigate("/");
        } else {
            navigate("/login");
        }
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <span className="navbar-brand mb-0 h1"><img src="/kanban.svg" width="30" height="30" alt="Kanban Board" /></span>
                <span className="navbar-brand"><h1><em>Kanbaneer</em></h1></span>
                <span className="navbar-brand" onClick={()=> profileClickHandler()}>
                    <img src="/personIcon.svg" width="30" height="30" alt="Login Btn" />
                </span>
            </div>
        </nav>
    )
}
