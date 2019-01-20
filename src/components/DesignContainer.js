import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class DesignContainer extends Component {
    render() {
        return (
        <Collapsible trigger= {
        <i className="far fa-object-ungroup title-dropdown__icon-design"></i>
        } open="true">
            
            <section className="design-card">
                <div className="title-dropdown">
                    <div className="title-dropdown__icontitle">
                        <i className="far fa-object-ungroup title-dropdown__icon-design"></i>
                        <h2 className="title-dropdown__title-design">Diseña</h2>
                    </div>
                    <div className="title-dropdown__arrow arrowDesign">
                        <i className="arrowD fas fa-chevron-up"></i>
                    </div>
                </div>

                <div className="design-card__options">
                    <div className="design-card__colors">
                        <h3 className="title-colors">Colores</h3>

                        <form className="design-card__colors__select-palette">

                            <label for="palette-green" className="palette">
                                <input className="radio" id="palette-green" type="radio" data-palette="paletteGreen" value="1" required name="selectPalete" onChange={this.props.handleColorInput} />
                                <div className="colors-palette">
                                    <div className="colors-palette__item green1"></div>
                                    <div className="colors-palette__item green2"></div>
                                    <div className="colors-palette__item green3"></div>
                                </div>
                            </label>


                            <label for="palette-red" className="palette">
                                <input className="radio palette2" id="palette-red" type="radio" data-palette="paletteRed" value="2" name="selectPalete" onChange={this.props.handleColorInput} />
                                <div className="colors-palette">
                                    <div className="colors-palette__item red1"></div>
                                    <div className="colors-palette__item red2"></div>
                                    <div className="colors-palette__item red3"></div>
                                </div>
                            </label>


                            <label for="palette-blue" className="palette">
                                <input className="radio palette3" id="palette-blue" type="radio" data-palette="paletteGrey" value="3" name="selectPalete" onChange={this.props.handleColorInput} />
                                <div className="colors-palette">
                                    <div className="colors-palette__item blue1"></div>
                                    <div className="colors-palette__item blue2"></div>
                                    <div className="colors-palette__item blue3"></div>
                                </div>
                            </label>


                            <label for="palette-purple" className="palette inactive">
                                <input className="radio palette4" id="palette-purple" type="radio" data-palette="palettePurple" value="4" name="selectPalete" onChange={this.props.handleColorInput} />
                                <div className="colors-palette">
                                    <div className="colors-palette__item purple1"></div>
                                    <div className="colors-palette__item purple2"></div>
                                    <div className="colors-palette__item purple3"></div>
                                </div>
                            </label>


                            <label for="palette-orange" className="palette inactive">
                                <input className="radio" id="palette-orange" type="radio" data-palette="paletteOrange" value="5" name="selectPalete" onChange={this.props.handleColorInput} />
                                <div className="colors-palette palette5">
                                    <div className="colors-palette__item orange1"></div>
                                    <div className="colors-palette__item orange2"></div>
                                    <div className="colors-palette__item orange3"></div>
                                </div>
                            </label>


                        </form>
                    </div>

                    <div className="design-card__fonts">
                        <h3 className="title-fonts">Fuentes</h3>

                        <form className="design-Card__colors__select-font">


                            <label for="font-Ubuntu" className="font">
                                <input className="radio fontradio typography1" id="font-Ubuntu" type="radio" data-font="Ubuntu" value="1"
                                    required name="selectFont" onChange={this.props.handleFontInput} />
                                <p className="font-Ubuntu">Ubuntu</p>
                            </label>


                            <label for="font-ComicSans " className="font ">
                                <input className="radio fontradio typography2" id="font-ComicSans" type="radio" data-font="ComicSans" value="2"
                                    name="selectFont" onChange={this.props.handleFontInput} />
                                <p className="font-ComicSans">Comic Sans</p>
                            </label>


                            <label for="font-Montserrat " className="font">
                                <input className="radio  fontradio typography3" id="font-Montserrat" type="radio" data-font="Montserrat" value="3"
                                    name="selectFont" onChange={this.props.handleFontInput} checked={this.props.checked} />
                                <p className="font-Monserrat">Monserrat</p>
                            </label>


                            <label for="font-Indie " className="font inactive">
                                <input className="radio fontradio typography4" id="font-Indie" type="radio" data-font="Indie" value="4" name="selectFont" onChange={this.props.handleFontInput} checked={this.props.checked} />
                                <p className="font-Indie">Indie</p>
                            </label>


                            <label for="font-Baskerville " className="font inactive">
                                <input className="radio  fontradio  typography5" id="font-Baskerville" type="radio" data-font="Baskerville" value="5" name="selectFont" onChange={this.props.handleFontInput} checked={this.props.checked} />
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

export default DesignContainer;