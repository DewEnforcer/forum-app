import React from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import {login} from "../services/authservice";

class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {

        },
        inputs: [
            {path: "username", name:"username", label: "Username", type: "text"},
            {path: "password", name:"password", label: "Password", type: "password"},
        ]
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = async () => {
        await login(this.state.data);
        window.location.href = "/";
    }

    render() { 
        return (
            <form className="login_form" onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <div className="input">
                    {this.state.inputs.map((i) => this.renderInput(i))}
                </div>
                {this.renderButton("Login")}
            </form>
        )
    }
}
 
export default LoginForm;