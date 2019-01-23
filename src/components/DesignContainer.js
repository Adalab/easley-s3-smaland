import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

class DesignContainer extends Component {
  render() {
    const icon = React.createElement("i", {
      className: "far fa-object-ungroup title-dropdown__icon-design"
    });
    const text = React.createElement(
      "p",
      { className: "title-dropdown__title-design" },
      "Diseña"
    );
    const divTitle = React.createElement(
      "div",
      { className: "title-dropdown__icontitle" },
      [icon, text]
    );
    const arrow = React.createElement("i", {
      className: "arrowD fas fa-chevron-up"
    });
    const divArrow = React.createElement(
      "div",
      { className: "title-dropdown__arrow arrowDesign" },
      [arrow]
    );
    const title = React.createElement("div", { className: "title-dropdown" }, [
      divTitle,
      divArrow
    ]);
    const {
      palette,
      typography,
      handleSelectInputs
    } = this.props;
    return (
      <Collapsible trigger={title} open={true}>
        <section className="design-card">
          <div className="design-card__options">
            <div className="design-card__colors">
              <h3 className="title-colors">Colores</h3>

              <form className="design-card__colors__select-palette">
                <label htmlFor="palette-green" className="palette">
                  <input
                    className="radio"
                    id="palette-green"
                    type="radio"
                    data-palette="paletteGreen"
                    value="1"
                    name="palette"
                    checked={palette === "1"}
                    onChange={handleSelectInputs}
                    required
                  />
                  <div className="colors-palette">
                    <div className="colors-palette__item green1" />
                    <div className="colors-palette__item green2" />
                    <div className="colors-palette__item green3" />
                  </div>
                </label>

                <label htmlFor="palette-red" className="palette">
                  <input
                    className="radio palette2"
                    id="palette-red"
                    type="radio"
                    data-palette="paletteRed"
                    value="2"
                    name="palette"
                    checked={palette === "2"}
                    onChange={handleSelectInputs}
                  />
                  <div className="colors-palette">
                    <div className="colors-palette__item red1" />
                    <div className="colors-palette__item red2" />
                    <div className="colors-palette__item red3" />
                  </div>
                </label>

                <label htmlFor="palette-blue" className="palette">
                  <input
                    className="radio palette3"
                    id="palette-blue"
                    type="radio"
                    data-palette="paletteGrey"
                    value="3"
                    name="palette"
                    checked={palette === "3"}
                    onChange={handleSelectInputs}
                  />
                  <div className="colors-palette">
                    <div className="colors-palette__item blue1" />
                    <div className="colors-palette__item blue2" />
                    <div className="colors-palette__item blue3" />
                  </div>
                </label>

                <label htmlFor="palette-purple" className="palette inactive">
                  <input
                    className="radio palette4"
                    id="palette-purple"
                    type="radio"
                    data-palette="palettePurple"
                    value="4"
                    name="palette"
                    checked={palette === "4"}
                    onChange={handleSelectInputs}
                  />
                  <div className="colors-palette">
                    <div className="colors-palette__item purple1" />
                    <div className="colors-palette__item purple2" />
                    <div className="colors-palette__item purple3" />
                  </div>
                </label>

                <label htmlFor="palette-orange" className="palette inactive">
                  <input
                    className="radio"
                    id="palette-orange"
                    type="radio"
                    data-palette="paletteOrange"
                    value="5"
                    name="palette"
                    checked={palette === "5"}
                    onChange={handleSelectInputs}
                  />
                  <div className="colors-palette palette5">
                    <div className="colors-palette__item orange1" />
                    <div className="colors-palette__item orange2" />
                    <div className="colors-palette__item orange3" />
                  </div>
                </label>
              </form>
            </div>

            <div className="design-card__fonts">
              <h3 className="title-fonts">Fuentes</h3>

              <form className="design-Card__colors__select-font">
                <label htmlFor="font-Ubuntu" className="font">
                  <input
                    className="radio fontradio typography1"
                    id="font-Ubuntu"
                    type="radio"
                    data-font="Ubuntu"
                    value="1"
                    name="typography"
                    checked={typography === "1"}
                    onChange={handleSelectInputs}
                    required
                  />
                  <p className="font-Ubuntu">Ubuntu</p>
                </label>

                <label htmlFor="font-ComicSans " className="font ">
                  <input
                    className="radio fontradio typography2"
                    id="font-ComicSans"
                    type="radio"
                    data-font="ComicSans"
                    value="2"
                    name="typography"
                    checked={typography === "2"}
                    onChange={handleSelectInputs}
                  />
                  <p className="font-ComicSans">Comic Sans</p>
                </label>

                <label htmlFor="font-Montserrat " className="font">
                  <input
                    className="radio  fontradio typography3"
                    id="font-Montserrat"
                    type="radio"
                    data-font="Montserrat"
                    value="3"
                    name="typography"
                    checked={typography === "3"}
                    onChange={handleSelectInputs}
                  />
                  <p className="font-Monserrat">Monserrat</p>
                </label>

                <label htmlFor="font-Indie " className="font inactive">
                  <input
                    className="radio fontradio typography4"
                    id="font-Indie"
                    type="radio"
                    data-font="Indie"
                    value="4"
                    name="typography"
                    checked={typography === "4"}
                    onChange={handleSelectInputs}
                  />
                  <p className="font-Indie">Indie</p>
                </label>

                <label htmlFor="font-Baskerville " className="font inactive">
                  <input
                    className="radio  fontradio  typography5"
                    id="font-Baskerville"
                    type="radio"
                    data-font="Baskerville"
                    value="5"
                    name="typography"
                    checked={typography === "5"}
                    onChange={handleSelectInputs}
                  />
                  <p className="font-Baskerville">Baskerville</p>
                </label>
              </form>
            </div>
          </div>
        </section>
      </Collapsible>
    );
  }
}

//PROP-TYPES
DesignContainer.propTypes = {
  palette: PropTypes.string.isRequired,
  typography: PropTypes.string.isRequired,
  handleSelectInputs: PropTypes.func.isRequired
};

export default DesignContainer;
