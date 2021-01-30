import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import responseService from './../services/responseservice';

const { submitResponse, editResponse, getResponse } = responseService;

class ReponseForm extends Form {
    state = {
        data: {
            body: ""
        },
        btnLabel: "Submit!",
        errors: {},
        inputs: [],
        textareas: [
            {path:"body", name:"body", label: "Response"}
        ]
    }

    schema = {
        body: Joi.string().min(30).max(512).required().label("Response")
    }

    async componentDidMount() {
        const {match} = this.props;
        
        if (!this.props.isEdit) return;
        
        const stateCopy = {...this.state};

        if (this.props.btnLabel) stateCopy.btnLabel = this.props.btnLabel;
        if (this.props.isEdit) {
            const {data, status} = await getResponse(match.params.idRes, match.params.idPost);
            if (status === 200) stateCopy.data.body = data.body; 
        }

        this.setState(stateCopy);
    }

    async doSubmit() {
        const {match} = this.props;

        if (this.props.isEdit) await editResponse(this.state.data, match.params.idRes, match.params.idPost);
        else await submitResponse(this.state.data, match.params.id);

        this.props.history.push("/"); //TODO replace return to page user came from
    }

    render() { 
        return (
            <form className="response_form" onSubmit={this.handleSubmit}>
                <h2>Your response</h2>
                <div className="input response_input">
                    {this.state.inputs.map(i => this.renderInput(i))}
                    {this.state.textareas.map(t => this.renderTextarea(t))}
                </div>
                {this.renderButton(this.state.btnLabel)}
            </form>
        )
    }
}
 
export default ReponseForm;