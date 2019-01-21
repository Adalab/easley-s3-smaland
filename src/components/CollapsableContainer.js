import React, { Component } from "react";
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
      handleInputs, fakeFileClick, fileInput
    } = this.props;
    return (
      <div className="tunning__responsive">
        <DesignContainer handleColorInput={handleColorInput} handleFontInput={handleFontInput}/>
        <FillContainer skills={skills} dataBack={dataBack} handleInputs={handleInputs} fakeFileClick={fakeFileClick}
        fileInput={fileInput} />
        <ShareContainer/>
      </div>
    );
  }
}

export default CollapsableContainer;
