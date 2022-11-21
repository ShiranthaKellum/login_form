import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <h2 style={{color: 'green'}}>{location.state.message}</h2>
            <h2>Welcome {location.state.email}</h2>
            <input
                type="submit"
                value="Logout"
                onClick={() => navigate('/')}
            />
        </div>
    )
}
export default HomePage;