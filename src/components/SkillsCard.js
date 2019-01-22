import React, { Component } from "react";

class SkillsCard extends Component {
  render() {
    if (this.props.dataBack.skills.length === 0) {
      return (
        <ul className="list__skills">
          <li className="list__item-skills">HTML</li>
          <li className="list__item-skills">CSS</li>
          <li className="list__item-skills">Gulp</li>
        </ul>
      );
    } else {
      return (
        <ul className="list__skills">
          {this.props.dataBack.skills.map((skill, i) => {
            return (
              <li key={i} className="list__item-skills">
                {skill}
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default SkillsCard;
