import React, { Component } from 'react';

const ArrayCollapsables = [
  {
    name: 'COLORES',
    option1: 'palette-green',
    option2: 'palette-red',
    option3: 'palette-blue',
    option4: 'palette-purple',
    option5: 'palette-orange',

  },
  {
    name: 'FUENTES',
    option1: 'font-Ubuntu',
    option2: 'font-ComicSans',
    option3: 'font-Montserrat',
    option4: 'font-Indie',
    option5: 'font-Baskerville',
  }
];

class DesignCollapsable extends Component {
  // constructor(props){
  //   super(props);
  //   this.name = name;
  // 
  
    render() { 
        return (
          {ArrayCollapsables.map(function(collapsable){
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
                <h3 className="title-colors">{this.props.name}</h3>
  
                <form className="design-card__colors__select-palette">
  
                  <label for={this.props.option1} className="palette">
                    <input className="radio" id={this.props.option1} type="radio" data-palette="paletteGreen" value="1" required name="selectPalete" />
                    <div className="colors-palette">
                      <div className="colors-palette__item green1"></div>
                      <div className="colors-palette__item green2"></div>
                      <div className="colors-palette__item green3"></div>
                    </div>
                  </label>
  
  
                  <label for={this.props.option2} className="palette">
                    <input className="radio palette2" id={this.props.option2} type="radio" data-palette="paletteRed" value="2" name="selectPalete" />
                    <div className="colors-palette">
                      <div className="colors-palette__item red1"></div>
                      <div className="colors-palette__item red2"></div>
                      <div className="colors-palette__item red3"></div>
                    </div>
                  </label>
  
  
                  <label for={this.props.option3} className="palette">
                    <input className="radio palette3" id={this.props.option3} type="radio" data-palette="paletteGrey" value="3" name="selectPalete" />
                    <div className="colors-palette">
                      <div className="colors-palette__item blue1"></div>
                      <div className="colors-palette__item blue2"></div>
                      <div className="colors-palette__item blue3"></div>
                    </div>
                  </label>
  
  
                  <label for={this.props.option4} className="palette inactive">
                    <input className="radio palette4" id={this.props.option4} type="radio" data-palette="palettePurple" value="4" name="selectPalete" />
                    <div className="colors-palette">
                      <div className="colors-palette__item purple1"></div>
                      <div className="colors-palette__item purple2"></div>
                      <div className="colors-palette__item purple3"></div>
                    </div>
                  </label>
  
  
                  <label for={this.props.option5} className="palette inactive">
                    <input className="radio" id={this.props.option5} type="radio" data-palette="paletteOrange" value="5" name="selectPalete" />
                    <div className="colors-palette palette5">
                      <div className="colors-palette__item orange1"></div>
                      <div className="colors-palette__item orange2"></div>
                      <div className="colors-palette__item orange3"></div>
                    </div>
                  </label>
  
  
                  </form>
                  </div>
                </div>
              </section>
          })    
        );
    }
  }
}
 
export default DesignCollapsable;