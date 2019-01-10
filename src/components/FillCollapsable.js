import React, { Component } from 'react';

class FillCollapsable extends Component {
    render() { 
        return (
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


          <form action="/signup" method="post" className="form hidden">
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

              <label for="HTML" className="checkbox-label">
                <input id="HTML" type="checkbox" value="HTML" name="skills" className="checkbox-input" />
                <p>HTML</p>
              </label>

              <label for="CSS" className="checkbox-label">
                <input id="CSS" type="checkbox" value="CSS" name="skills" className="checkbox-input" />
                <p>CSS</p>
              </label>

              <label for="Sass" className="checkbox-label">
                <input id="sass" type="checkbox" value="Sass" name="skills" className="checkbox-input" />
                <p>Sass</p>
              </label>

              <label for="Git" className="checkbox-label">
                <input id="git" type="checkbox" value="git" name="skills" className="checkbox-input" />
                <p>Git</p>
              </label>

              <label for="Gulp" className="checkbox-label">
                <input id="gulp" type="checkbox" value="gulp" name="skills" className="checkbox-input" />
                <p>Gulp</p>
              </label>

              <label for="JavaScript" className="checkbox-label">
                <input id="javascript" type="checkbox" value="JavaScript" name="skills" className="checkbox-input" />
                <p>JavaScript</p>
              </label>

              <label for="AJAX" className="checkbox-label">
                <input id="ajax" type="checkbox" value="AJAX" name="skills" className="checkbox-input" />
                <p>AJAX</p>
              </label>

              <label for="React" className="checkbox-label">
                <input id="react" type="checkbox" value="React" name="skills" className="checkbox-input" />
                <p>React</p>
              </label>
            </div>
          </form>
        </section>
         );
    }
}
 
export default FillCollapsable;