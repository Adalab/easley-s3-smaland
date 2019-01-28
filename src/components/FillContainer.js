import React, { Component } from 'react';
import PropTypes from "prop-types";
import Input from './Input.js';
import Collapsible from 'react-collapsible';
import ImageUpdate from './ImageUpdate.js';

class FillContainer extends Component {

    render() {
        const {
            dataBack,
            handleInputs,
            renderSkills,
            fakeFileClick,
            fileInput,
        } = this.props;
        const icon = (
            <i className="far fa-keyboard"/>);
        const text = (
            <p className="title-dropdown__title-fill">
            Rellena
            </p>);
        const divTitle = (
            <div className="title-dropdown__icontitle">
                {icon}
                {text}
            </div>);
        const arrow =(
            <i className="arrowF fas fa-chevron-down"/>);
        const divArrow = (
            <div className= "title-dropdown__arrow arrowFill">
                {arrow}
            </div>);
        const title = (
            <div className="title-dropdown-fill">
                {divTitle}
                {divArrow}
            </div>);
        return (
            <Collapsible trigger={title}>
                <section className="fill-card">
                    <form action="/signup" method="post" className="form ">
                        <Input
                            name="name"
                            content="Nombre completo"
                            example="Ej: Sally Jill"
                            type="text"
                            value={dataBack.name}
                            handleInputs={handleInputs}
                        />
                        <Input
                            name="job" content="Profesión" example="Ej: Front-end unicorn"
                            type="text"
                            value={dataBack.job}
                            handleInputs={handleInputs}
                        />

                        <ImageUpdate 
                            dataBack={dataBack} 
                            fakeFileClick={fakeFileClick} 
                            fileInput={fileInput}/>

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
                            name="linkedin" content="Linkedin"
                            example="Ej: sally-hill" type="text"
                            value={dataBack.linkedin}
                            handleInputs={handleInputs}
                        />

                        <Input
                            name="github"
                            content="GitHub"
                            example="Ej: sally-hill" type="text"
                            value={dataBack.github}
                            handleInputs={handleInputs}
                        />

                        <div className="container-skills">
                            <p className="text-skills">Habilidades (máximo 3)</p>
                            {renderSkills()}
                        </div>
                    </form>
                </section>
            </Collapsible>
        );
    }
}

FillContainer.propTypes = {
    dataBack: PropTypes.object.isRequired,
    handleInputs: PropTypes.func.isRequired,
    renderSkills: PropTypes.func.isRequired,
    fakeFileClick: PropTypes.func.isRequired,
    fileInput: PropTypes.object.isRequired
}

export default FillContainer;