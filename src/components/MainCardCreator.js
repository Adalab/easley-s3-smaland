import React, { Component } from "react";
import ContainerCard from "./ContainerCard";
import CollapsableContainer from "./CollapsableContainer";

class MainCardCreator extends Component {
  render() {
    const { dataBack, skills, colorClass, fontClass, handleColorInput, handleFontInput, handleInputs } = this.props;
    return (
      <main className="created__target">
        <ContainerCard
          dataBack={dataBack}
          colorClass={colorClass}
          fontClass={fontClass}
        />
        <CollapsableContainer
          dataBack={dataBack}
          skills={skills}
          handleColorInput={handleColorInput}
          handleFontInput={handleFontInput}
          handleInputs={handleInputs}
        />
      </main>
    );
  }
}

export default MainCardCreator;
