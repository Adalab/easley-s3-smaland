import React, { Component } from 'react';
import Input from './Input.js';
import Collapsible from 'react-collapsible';

class FillContainer extends Component {
    constructor(props) {
        super(props);
        this.saveSkills = this.saveSkills.bind(this);
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
        return (
            <Collapsible trigger={<i className="far fa-keyboard"></i>}>
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
                    <Input name="name" content="Nombre completo" example="Ej: Sally Jill" type="text" />
                    <Input name="job" content="Profesión" example="Ej: Front-end unicorn" type="text" />

                    <p className="item-label">Imagen de perfil</p>
                    <div className="container-image">
                        <button className="image-link" type="submit">Añadir imagen</button>
                        <input type="file" name="" id="img-selector" className="action__hiddenField" />
                        <div className="image-preview image-preview-small">
                        </div>
                    </div>
                    <Input name="email" content="Email" example="Ej: sally-hill@gmail.com" type="email" />

                    <Input name="phone" content="Teléfono" example="Ej: 555·55·55·55" type="tel" />

                    <Input name="Linkedin" content="Linkedin" example="Ej: sally-hill" type="text" />

                    <Input name="Github" content="Github" example="Ej: sally-hill" type="text" />

                    <div className="container-skills">
                        <p className="text-skills">Habilidades (máximo 3)</p>
                        {this.renderSkills()}
                    </div>
                </form>
            </section>
            </Collapsible>
        );
    }
}

export default FillContainer;