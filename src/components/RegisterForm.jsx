import React from 'react';
import Joi from "joi-browser";

import Form from "./common/form";
import userService from "../services/userservice";

const {register} = userService;

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            email: ""
        },
        errors: {

        },
        inputs: [
            {path: "username", name:"username", label: "Username", type: "text"},
            {path: "password", name:"password", label: "Password", type: "password"},
            {path: "email", name:"email", label: "Email", type: "text"},
        ]
    }

    schema = {
        username: Joi.string().min(3).required().label("Username"),
        password: Joi.string().min(5).required().label("Password"),
        email: Joi.string().min(4).required().label("Email")
    }

    async doSubmit() {
        await register(this.state.data);
        window.location.href = "/";
    }

    render() { 
        return (
            <form className="register_form" onSubmit={this.handleSubmit}>
                <h2>Sign-up</h2>
                <div className="input">
                    {this.state.inputs.map((i) => this.renderInput(i))}
                </div>
                {this.renderButton("Signup")}
            </form>
        )
    }
}
 
export default RegisterForm;