import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "andriy2",
            password: "andriy2",
            check: false
        };
    }

    checkAuth = async (e) => {
        const login = e.target.elements.login.value;
        const password = e.target.elements.password.value;
        if (login === this.state.login && password === this.state.password) {
            this.setState({
                check: true
            })
        }
    }

    render() {
        if (this.state.check) {
            return (
                <Redirect to='/dashboard' />
            );
        }
        else {
            return (
                <form id="form" onSubmit={this.checkAuth}>
                    <h1>Login</h1>
                    <input type="text" name="login" placeholder="login" />
                    <input type="password" name="password" placeholder="password" />
                    <input type="submit" name="submit" value="Login"/>
                </form>
            );
        }
    }
}

export default Login;