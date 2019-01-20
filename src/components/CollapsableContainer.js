import React, { Component } from 'react';
import Input from './Input.js';
import ImageUpdate from './ImageUpdate';

class CollapsableContainer extends Component {
  constructor(props) {
    super(props);
    this.saveSkills = this.saveSkills.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    return this.props.skills.map(skill => {
      return (
        <label for={skill} className="checkbox-label">
          <input id={skill} type="checkbox" value={skill} name="skills" className="checkbox-input" onClick={this.saveSkills} />
          <p>{skill}</p>
        </label>)
    })
  }

  saveSkills(event) {
    const { dataBack } = this.props;
    const valueInput = event.currentTarget.value;
    return (
      dataBack.skills.push(valueInput)
    )
  }
  
  render() {
    const {dataBack} = this.props;
    return (
      <div className="tunning__responsive">
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
        <section className="fill-card">
          <div className="title-dropdown-fill">
            <div className="title-dropdown__icontitle">
              <i className="far fa-keyboard"></i>
              <h2 className="title-dropdown__title-fill">Rellena</h2>
            </div>
            <div className="title-dropdown__arrow arrowFill">
              <i className="arrowF fas fa-chevron-down"></i>
            </div>
          </div>


          <form action="/signup" method="post" className="form ">
            <Input value={dataBack.name} name="name" content="Nombre completo" example="Ej: Sally Jill" type="text" />
            <Input value={dataBack.job} name="job" content="Profesión" example="Ej: Front-end unicorn" type="text" />

            <ImageUpdate dataBack= {this.props.dataBack} />
            <Input value={dataBack.email} name="email" content="Email" example="Ej: sally-hill@gmail.com" type="email" />

            <Input value={dataBack.phone}  name="phone" content="Teléfono" example="Ej: 555·55·55·55" type="tel" />

            <Input value={dataBack.linkedin}  name="Linkedin" content="Linkedin" example="Ej: sally-hill" type="text" />

            <Input value={dataBack.github} name="Github" content="Github" example="Ej: sally-hill" type="text" />

            <div className="container-skills">
              <p className="text-skills">Habilidades (máximo 3)</p>
              {this.renderSkills()}
            </div>
          </form>
        </section>
        <section className="share">
          <div className="container-section">
            <div className="container-title">
              <div className="container-icon-title">
                <div className="title-dropdown__icon-share">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h2 className="title-dropdown__title-share">Comparte</h2>
              </div>
              <div className="arrow-share-down"></div>
              <i className="arrowSa fas fa-chevron-down"></i>
            </div>
            <div className="container-share hidden">
              <button type="submit" className="button-create no-clicked">
                <i className="far fa-address-card"></i>
                <p>Crear tarjeta</p>
              </button>
              <span className="loading"></span>
              <div className="container-hide-section hidden">
                <h3 className="text-hide-section">La tarjeta ha sido creada:</h3>
                <a className="link-profile-card" href="enlace a tarjeta"></a>
                <a className="share-twitter twitter-share-button" href="">
                  <i className="fab fa-twitter"></i>
                  <p className="share-twitter-text">Compartir en twitter</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  };

}

export default CollapsableContainer;