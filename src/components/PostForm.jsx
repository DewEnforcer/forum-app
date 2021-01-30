import React from 'react';
import Joi from "joi-browser";
import ResponseForm from "./ResponseForm";
import {submitPost} from "../services/postservice";

class PostForm extends ResponseForm {
    state = {
        data: {
            title: "",
            startResponse: "",
            sectionID: this.props.match.params.id
        },
        errors: {},
        btnLabel: "Create new post!",
        inputs: [
          {path: "title", name: "title", type: "text", label: "Post title: "}  
        ],
        textareas: [
            {path:"startResponse", name:"startResponse", label: "Post body"}
        ]
    }

    schema = {
        startResponse: Joi.string().min(30).max(512).required().label("Post body"),
        title: Joi.string().min(3).max(15).required().label("Post title")
    }

    async doSubmit() {
        const {status, data} = await submitPost(this.state.data);
        if (status === 200) return this.props.history.push(`/post/${data._id}`);
        //TODO handle errors
    }

    render() {
        const {inputs, textareas} = this.state;

        return (
            <form className="response_form" onSubmit={this.handleSubmit}>
                <h2>Submit new post</h2>
                <div className="input response_input">
                    {inputs.map(i => this.renderInput(i))}
                    {textareas.map(t => this.renderTextarea(t))}
                </div>
                {this.renderButton("Post")}
            </form>
        )
    }
    
}
 
export default PostForm;