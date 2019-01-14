import React, { Component } from 'react';

class CollapsableContainer extends Component {
  renderSkills() { 
    console.log(this.props);
    return this.props.skills.map(skill => {
    return (
      <label for={skill} className="checkbox-label">
        <input id={skill} type="checkbox" value={skill} name="skills" className="checkbox-input" />
        <p>{skill}</p>
      </label>)
  })}

  render() {
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
                  <input className="radio" id="palette-green" type="radio" data-palette="paletteGreen" value="1" required name="selectPalete" />
                  <div className="colors-palette">
                    <div className="colors-palette__item green1"></div>
                    <div className="colors-palette__item green2"></div>
                    <div className="colors-palette__item green3"></div>
                  </div>
                </label>


                <label for="palette-red" className="palette">
                  <input className="radio palette2" id="palette-red" type="radio" data-palette="paletteRed" value="2" name="selectPalete" />
                  <div className="colors-palette">
                    <div className="colors-palette__item red1"></div>
                    <div className="colors-palette__item red2"></div>
                    <div className="colors-palette__item red3"></div>
                  </div>
                </label>


                <label for="palette-blue" className="palette">
                  <input className="radio palette3" id="palette-blue" type="radio" data-palette="paletteGrey" value="3" name="selectPalete" />
                  <div className="colors-palette">
                    <div className="colors-palette__item blue1"></div>
                    <div className="colors-palette__item blue2"></div>
                    <div className="colors-palette__item blue3"></div>
                  </div>
                </label>


                <label for="palette-purple" className="palette inactive">
                  <input className="radio palette4" id="palette-purple" type="radio" data-palette="palettePurple" value="4" name="selectPalete" />
                  <div className="colors-palette">
                    <div className="colors-palette__item purple1"></div>
                    <div className="colors-palette__item purple2"></div>
                    <div className="colors-palette__item purple3"></div>
                  </div>
                </label>


                <label for="palette-orange" className="palette inactive">
                  <input className="radio" id="palette-orange" type="radio" data-palette="paletteOrange" value="5" name="selectPalete" />
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
                    required name="selectFont" />
                  <p className="font-Ubuntu">Ubuntu</p>
                </label>


                <label for="font-ComicSans " className="font ">
                  <input className="radio fontradio typography2" id="font-ComicSans" type="radio" data-font="ComicSans" value="2"
                    name="selectFont" />
                  <p className="font-ComicSans">Comic Sans</p>
                </label>


                <label for="font-Montserrat " className="font">
                  <input className="radio  fontradio typography3" id="font-Montserrat" type="radio" data-font="Montserrat" value="3"
                    name="selectFont" />
                  <p className="font-Monserrat">Monserrat</p>
                </label>


                <label for="font-Indie " className="font inactive">
                  <input className="radio fontradio typography4" id="font-Indie" type="radio" data-font="Indie" value="4" name="selectFont" />
                  <p className="font-Indie">Indie</p>
                </label>


                <label for="font-Baskerville " className="font inactive">
                  <input className="radio  fontradio  typography5" id="font-Baskerville" type="radio" data-font="Baskerville" value="5" name="selectFont" />
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


          <form action="/signup" method="post" className="form">
            <label for="name" className="item-label">Nombre completo</label>
            <input placeholder="Ej: Sally Jill" id="name" type="text" name="name" className="item-input" required />

            <label for="job" className="item-label">Profesión</label>
            <input placeholder="Ej: Front-end unicorn" id="job" type="text" name="job" className="item-input" required />

            <p className="item-label">Imágen de perfil</p>
            <div className="container-image">
              <button className="image-link" type="submit">Añadir imagen</button>
              <input type="file" name="" id="img-selector" className="action__hiddenField" />
              <div className="image-preview image-preview-small">
              </div>
            </div>

            <label for="email" className="item-label">Email</label>
            <input placeholder="Ej: sally-hill@gmail.com" id="email" type="email" name="email" className="item-input" required />

            <label for="phone" className="item-label">Teléfono</label>
            <input placeholder="Ej: 555·55·55·55" type="tel" id="phone" name="phone" className="item-input"
              required />

            <label for="Linkedin" className="item-label">Linkedin</label>
            <input placeholder="Ej: sally-hill" type="text" name="linkedin" id="linkedin" className="item-input" required />

            <label for="GitHub" className="item-label">GitHub</label>
            <input placeholder="Ej: sally-hill" type="text" name="github" id="github" className="item-input" required />

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
  }
}

export default CollapsableContainer;