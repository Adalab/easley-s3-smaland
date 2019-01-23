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
      handleInputs,
      handleSkills,
      renderSkills,
      fakeFileClick, fileInput, resetFunction
    } = this.props;
    return (
      <main className="created__target">
        <ContainerCard
          dataBack={dataBack}
          colorClass={colorClass}
          fontClass={fontClass}
          skillsCard={dataBack}
          resetFunction={resetFunction}
          
        />
        <CollapsableContainer
          dataBack={dataBack}
          skills={skills}
          handleInputs={handleInputs}
          handleSkills = {handleSkills}
          renderSkills = {renderSkills}
          fakeFileClick={fakeFileClick}
          fileInput={fileInput}
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
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleInputs: PropTypes.func.isRequired
};

export default MainCardCreator;
