import React, { Component } from "react";
import PropTypes from "prop-types";
import DesignContainer from "./DesignContainer.js";
import FillContainer from "./FillContainer.js";
import ShareContainer from "./ShareContainer.js";

class CollapsableContainer extends Component {
  render() {
    const {
      handleColorInput,
      handleFontInput,
      colorSelected,
      fontSelected,
      skills,
      dataBack,
      handleInputs,
      handleSkills,
      renderSkills
    } = this.props;
    return (
      <div className="tunning__responsive">
        <DesignContainer
          colorSelected={colorSelected}
          fontSelected={fontSelected}
          handleColorInput={handleColorInput}
          handleFontInput={handleFontInput}
        />
        <FillContainer
          skills={skills}
          dataBack={dataBack}
          handleInputs={handleInputs}
          handleSkills={handleSkills}
          renderSkills={renderSkills}
        />
        <ShareContainer />
      </div>
    );
  }
}

//PROP-TYPES
CollapsableContainer.propTypes = {
  handleColorInput: PropTypes.func.isRequired,
  handleFontInput: PropTypes.func.isRequired,
  colorSelected: PropTypes.string.isRequired,
  fontSelected: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataBack: PropTypes.object.isRequired,
  handleInputs: PropTypes.func.isRequired,
  handleSkills: PropTypes.func.isRequired,
  renderSkills: PropTypes.func.isRequired
};

export default CollapsableContainer;
