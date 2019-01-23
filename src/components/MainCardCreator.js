import React, { Component } from "react";
import PropTypes from "prop-types";
import ContainerCard from "./ContainerCard";
import CollapsableContainer from "./CollapsableContainer";

class MainCardCreator extends Component {
  render() {
    const {
      dataBack,
      skills,
      colorClass,
      fontClass,
      palette,
      typography,
      handleColorInput,
      handleFontInput,
      handleSelectInputs,
      handleInputs,
      handleSkills,
      renderSkills
    } = this.props;
    return (
      <main className="created__target">
        <ContainerCard
          dataBack={dataBack}
          colorClass={colorClass}
          fontClass={fontClass}
          skillsCard={dataBack}
        />
        <CollapsableContainer
          dataBack={dataBack}
          skills={skills}
          palette={palette}
          typography={typography}
          handleSelectInputs={handleSelectInputs}
          handleInputs={handleInputs}
          handleSkills={handleSkills}
          renderSkills={renderSkills}
        />
      </main>
    );
  }
}

//PROP-TYPES
MainCardCreator.propTypes = {
  dataBack: PropTypes.object.isRequired,
  colorClass: PropTypes.string.isRequired,
  fontClass: PropTypes.string.isRequired,
  palette: PropTypes.string.isRequired,
  typography: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectInputs: PropTypes.func.isRequired,
  handleInputs: PropTypes.func.isRequired
};

export default MainCardCreator;
