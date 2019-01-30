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

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default Input;
