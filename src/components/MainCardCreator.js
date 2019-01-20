import React, { Component } from "react";
import ContainerCard from "./ContainerCard";
import CollapsableContainer from "./CollapsableContainer";

class MainCardCreator extends Component {
  render() {
    const { dataBack, skills, colorClass, fontClass, handleColorInput, handleFontInput } = this.props;
    return (
      <main className="created__target">
        <ContainerCard
          dataBack={dataBack}
          colorClass={colorClass}
          fontClass={fontClass}
        />
        <CollapsableContainer
          skills={skills}
          handleColorInput={handleColorInput}
          handleFontInput={handleFontInput}
          dataBack={dataBack}
        />
      </main>
    );
  }
}

export default MainCardCreator;
