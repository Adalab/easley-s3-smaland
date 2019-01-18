import React, { Component, Fragment } from "react";

class Input extends Component {
    render() {
        const { value, name } = this.props;
        return (
            <Fragment>
                <label htmlFor={name} className="item-label">
                    {this.props.content}
                </label>
                <input
                    value={value}
                    placeholder={this.props.example}
                    id={name}
                    type={this.props.type}
                    name={name}
                    className="item-input"
                    onChange = {this.props.handleInputs}
                    required
                />
            </Fragment>
        );
    }
}

export default Input;
