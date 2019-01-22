import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

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

//PROP-TYPES
Input.PropTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  content:PropTypes.string,
  example: PropTypes.string,
  type: PropTypes.string,
  handleInputs: PropTypes.func,
}

export default Input;
