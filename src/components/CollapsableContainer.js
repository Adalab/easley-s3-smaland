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
      handleInputs
    } = this.props;
    return (
      <div className="tunning__responsive">
        <DesignContainer handleColorInput={handleColorInput} handleFontInput={handleFontInput}/>
        <FillContainer skills={skills} dataBack={dataBack} handleInputs={handleInputs} />
        <ShareContainer/>
      </div>
    );
  }
}

//PROP-TYPES
CollapsableContainer.PropTypes = {
  handleColorInput: PropTypes.func,
  handleFontInput: PropTypes.func,
  skills: PropTypes.arrayOf(PropTypes.string),
  dataBack: PropTypes.object,
  handleInputs: PropTypes.func,
}

export default CollapsableContainer;
