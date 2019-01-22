import React, { Component } from 'react';
import PropTypes from "prop-types";
import Input from './Input.js';
import Collapsible from 'react-collapsible';

class FillContainer extends Component {
    constructor(props) {
        super(props);
        this.saveSkills = this.saveSkills.bind(this);
        this.renderSkills = this.renderSkills.bind(this);
    }

    renderSkills() {
        return this.props.skills.map(skill => {
            return (
                <label htmlFor={skill} className="checkbox-label">
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
        const {
            dataBack,
            handleInputs
        } = this.props;
        const icon = React.createElement('i', { className: "far fa-keyboard" });
        const text = React.createElement('p', { className: "title-dropdown__title-fill" }, "Rellena");
        const divTitle = React.createElement('div', { className: "title-dropdown__icontitle" }, [icon, text]);
        const arrow = React.createElement('i', { className: "arrowF fas fa-chevron-down" });
        const divArrow = React.createElement('div', { className: "title-dropdown__arrow arrowFill" }, [arrow])
        const title = React.createElement('div', { className: "title-dropdown-fill" }, [divTitle, divArrow]);
        return (
            <Collapsible trigger={title}>
                <section className="fill-card">
                    <form action="/signup" method="post" className="form ">
                        <Input
                            name="name"
                            content="Nombre completo" example="Ej: Sally Jill" type="text"
                            value={dataBack.name}
                            handleInputs={handleInputs}
                            />
                        <Input 
                            name="job" content="Profesión" example="Ej: Front-end unicorn" 
                            type="text" 
                            value={dataBack.job}
                            handleInputs={handleInputs}
                            />

                        <p className="item-label">Imagen de perfil</p>
                        <div className="container-image">
                            <button className="image-link" type="submit">Añadir imagen</button>
                            <input 
                            type="file" 
                            name="" 
                            id="img-selector" className="action__hiddenField" />
                            <div className="image-preview image-preview-small">
                            </div>
                        </div>
                        <Input 
                        name="email" 
                        content="Email" 
                        example="Ej: sally-hill@gmail.com" type="email" 
                        value={dataBack.email}
                        handleInputs={handleInputs}
                        />

                        <Input 
                        name="phone" 
                        content="Teléfono" 
                        example="Ej: 555·55·55·55" type="tel" 
                        value={dataBack.phone}
                        handleInputs={handleInputs}
                        />

                        <Input 
                        name="Linkedin" content="Linkedin" 
                        example="Ej: sally-hill" type="text" 
                        value={dataBack.linkedin}
                        handleInputs={handleInputs}
                        />

                        <Input 
                        name="Github" 
                        content="Github" 
                        example="Ej: sally-hill" type="text" 
                        value={dataBack.github}
                        handleInputs={handleInputs}
                        />

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

//PPROP-TYPES
FillContainer.PropTypes = {
    skills: PropTypes.arrayOf(PropTypes.string),
    dataBack: PropTypes.object,
    handleInputs: PropTypes.func,
    }

export default FillContainer;