import React, { Component } from "react";
import PropTypes from "prop-types";
import DesignContainer from './DesignContainer.js';
import FillContainer from './FillContainer.js';
import ShareContainer from './ShareContainer.js';

class CollapsableContainer extends Component {
  render() {
    const {
      handleColorInput,
      handleFontInput,
      skills,
      dataBack,
      handleInputs,
      handleSkills,
      renderSkills,
      sendCardToBackend,
      cardURL,
      fakeFileClick, 
      fileInput,
      hidden,
      cardCreationLoading
    } = this.props;
    return (
      <div className="tunning__responsive">
        <DesignContainer handleColorInput={handleColorInput} handleFontInput={handleFontInput}/>
        <FillContainer skills={skills} dataBack={dataBack} handleInputs={handleInputs} handleSkills={handleSkills} renderSkills={renderSkills} fakeFileClick={fakeFileClick}
        fileInput={fileInput}/>
        <ShareContainer sendCardToBackend={sendCardToBackend} 
        cardURL={cardURL} 
        hidden ={hidden}
        cardCreationLoading = {cardCreationLoading}
        />
      </div>
    );
  }
}

//PROP-TYPES
CollapsableContainer.propTypes = {
  handleColorInput: PropTypes.func.isRequired,
  handleFontInput: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataBack: PropTypes.object.isRequired,
  handleInputs: PropTypes.func.isRequired,
  handleSkills: PropTypes.func.isRequired,
  renderSkills: PropTypes.func.isRequired,
}

export default CollapsableContainer;
