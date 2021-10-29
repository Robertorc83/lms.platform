// NPM Packages
import { useHistory } from "react-router"

// Project files
import { useAuth } from "state/AuthProvider";

export default function Home() {
    // Global state
    const { user, setUser, setIsLogged } = useAuth();
    const history = useHistory();

    // Methods
    function onLogout() {
        localStorage.setItem("uid", "");
        setUser({});
        setIsLogged(false);
        history.push("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to OpenEyes E-learning, {user.name}</p>
            {user.isTeacher? <p>you are the teacher</p> : <p>you are the student</p>}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}