import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { handleClick, type, children, styles } = this.props;
    return (
      <button type={type} className={styles} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Button;
