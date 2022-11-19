import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <h2>Login form</h2>
            <form action="">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <br />
                <input
                    type="submit"
                    value="Login"
                    onClick={username === 'admin' && password === 'password' ?
                        () => navigate('/homepage', { state: { username: username, password: password } }) :
                        () => navigate('/')} />
            </form>
        </div>
    )
}
export default Login;