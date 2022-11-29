import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [incorrectRes, setIncorrectRes] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const logIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://restapi.adequateshop.com/api/authaccount/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.message === 'success') {
          navigate('/homepage', {
            state: {
              email: email,
              message: 'You have logged in succssfully',
            },
          });
        } else {
          setIncorrectRes(true);
          navigate('/', {
            state: { message: response.data.message },
          });
        }
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <h2>Login form</h2>
      {incorrectRes && (
        <h3 style={{ color: 'red' }}>{location.state.message}</h3>
      )}
      <form onSubmit={logIn}>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          placeholder="Username"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
