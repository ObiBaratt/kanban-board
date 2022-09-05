export default function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <span className="navbar-brand mb-0 h1">My Kanban Board</span>
                <a className="navbar-brand" href="/">
                    <img src="/personIcon.svg" width="30" height="30" alt="Login Btn" />
                </a>
            </div>
        </nav>
    )
}
