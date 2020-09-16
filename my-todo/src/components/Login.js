import React from 'react';

class Login extends React.Component {


    render() {
        return (
            <div className="login">
                <form className="login_form">
                    <h1 className="login-title">Login</h1>
                    <div className="login_inputs">
                        <div className="username_input-container">
                            <label className="username-label">Username</label>
                            <input type="text" placeholder="Username" className="username-input"></input>
                        </div>

                        <div className="password_input-container">
                            <label onClick={this.logButton} className="password-label">Password</label>
                            <input type="password" placeholder="Password" className="password-input"></input>
                        </div>
                    </div>
                    <div className="sign_btn-container">
                        <button className="btn btn-primary btn-lg">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;