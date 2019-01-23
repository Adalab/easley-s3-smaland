import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsCard from "./SkillsCard";
import defaultImage from '../images/silueta.jpg';

class Card extends Component {
  render() {
    const { dataBack, colorClass, fontClass } = this.props;
    const nameDefault = "Nombre Apellido";
    const jobDefault = "Front-End Developer";
    return (
      <div className={`box__card ${colorClass}`} id="box">
        <div className={`userInfo ${fontClass}`} id="userInfo">
          <div className="detail" />
          <h2 className="userInfo__name">{dataBack.name || nameDefault} </h2>
          <h3 className="userInfo__job">{dataBack.job || jobDefault}</h3>
        </div>
        <div className="img image-preview__file" />
        <ul className="list__icon">
          <li className="list__item">
            <a className="item__link mobile" href={dataBack.phone}>
              <i className="fas fa-mobile-alt" />
            </a>
          </li>
          <li className="list__item">
            <a className="item__link email" href={`mailto:${dataBack.email}`}>
              <i className="far fa-envelope" />
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link linkedin"
              href={`https://www.linkedin.com/in/${dataBack.linkedin}`}
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="list__item">
            <a
              className="item__link github"
              href={`https://www.github.com/${dataBack.github}`}
            >
              <i className="fab fa-github-alt" />
            </a>
          </li>
        </ul>
        <div className="separation" />
        <SkillsCard dataBack={dataBack} />
      </div>
    );
  }
}

//PROP-TYPES
Card.propTypes = {
  dataBack: PropTypes.object.isRequired,
  colorClass: PropTypes.string.isRequired,
  fontClass: PropTypes.string.isRequired
};

export default Card;
