import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";
import Button from "./Button.js";

class ContainerCard extends Component {
    render() {
        return (
            <section className="section__card">
                <div className="container__width">
                    <Button type="reset" styles="button__reset">
                        <i className="far fa-trash-alt" />
                        <span className="button">Reset</span>
                    </Button>
                    <Card
                        dataBack={this.props.dataBack}
                        colorClass={this.props.colorClass}
                        fontClass={this.props.fontClass}
                    />
                </div>
            </section>
        );
    }
}

//PROP-TYPES
ContainerCard.propTypes = {
    dataBack: PropTypes.object,
    colorClass: PropTypes.string,
    fontClass: PropTypes.string,
    };

export default ContainerCard;

