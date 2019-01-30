import React, { Component } from "react";
import PropTypes from "prop-types";
import DesignContainer from "./DesignContainer.js";
import FillContainer from "./FillContainer.js";
import ShareContainer from "./ShareContainer.js";

class CollapsableContainer extends Component {
  render() {
    const {
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
        <DesignContainer dataBack={dataBack} handleInputs={handleInputs} />
        <FillContainer
          dataBack={dataBack}
          handleInputs={handleInputs}
          handleSkills={handleSkills}
          renderSkills={renderSkills}
          fakeFileClick={fakeFileClick}
          fileInput={fileInput}
        />
        <ShareContainer
          sendCardToBackend={sendCardToBackend}
          cardURL={cardURL}
          hidden={hidden}
          cardCreationLoading={cardCreationLoading} />
      </div>
    );
  }
}

CollapsableContainer.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataBack: PropTypes.object.isRequired,
  handleInputs: PropTypes.func.isRequired,
  handleSkills: PropTypes.func.isRequired,
  renderSkills: PropTypes.func.isRequired,
  sendCardToBackend: PropTypes.func.isRequired,
  cardURL: PropTypes.string.isRequired,
  fakeFileClick: PropTypes.func.isRequired,
  fileInput: PropTypes.object.isRequired,
  hidden: PropTypes.string.isRequired,
  cardCreationLoading: PropTypes.bool.isRequired,
};

export default CollapsableContainer;
