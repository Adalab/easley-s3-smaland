import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className={this.props.styles}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Button;
