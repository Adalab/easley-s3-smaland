import React, { Component, Fragment } from "react";

class Input extends Component {
  render() {
    const { value, name, content, example, type, handleInputs } = this.props;
    return (
      <Fragment>
        <label htmlFor={name} className="item-label">
          {content}
        </label>
        <input
          value={value}
          placeholder={example}
          id={name}
          type={type}
          name={name}
          className="item-input"
          onChange={handleInputs}
          required
        />
      </Fragment>
    );
  }
}

export default Input;
