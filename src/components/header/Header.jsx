import { Link } from "react-router";

export default function Header({
    isAuth
}) {
    return (
        <header>
            {/* Navigation */}
            <nav>
                <Link to='/' className="home"> <img src="/images/logo.png" alt="logo" /></Link>
                <Link to='/catalog'>Catalog</Link>
                {isAuth
                    ?
                    (<div id="user">
                        <a href="/games/create">Add Game</a>
                        <a href="/logout">Logout</a>
                    </div>)
                    : (
                        <div id="guest">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </div>
                    )}

            </nav>
        </header>

    );
}