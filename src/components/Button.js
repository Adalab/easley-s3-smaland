import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const {resetFunction} = this.props;
    return (
      <button type={this.props.type} className={this.props.styles} onClick={resetFunction}>
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
