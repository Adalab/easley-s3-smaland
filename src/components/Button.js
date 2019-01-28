import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const {resetFunction, type, children, styles} = this.props;
    return (
      <button type={type} className={styles} onClick={resetFunction}>
        {children} 
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  resetFunction: PropTypes.func.isRequired,
};

export default Button;
