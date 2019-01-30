import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";
import Button from "./Button.js";

class ContainerCard extends Component {
  render() {
    const { resetFunction, dataBack, colorClass, fontClass } = this.props;
    return (
      <section className="section__card">
        <div className="container__width">
          <Button type="reset" styles="button__reset" handleClick={resetFunction}>
            <i className="far fa-trash-alt" />
            <span className="button">Reset</span>
          </Button>
          <Card
            dataBack={dataBack}
            colorClass={colorClass}
            fontClass={fontClass}
          />
        </div>
      </section>
    );
  }
}

ContainerCard.propTypes = {
  dataBack: PropTypes.object.isRequired,
  colorClass: PropTypes.string.isRequired,
  fontClass: PropTypes.string.isRequired,
};

export default ContainerCard;
