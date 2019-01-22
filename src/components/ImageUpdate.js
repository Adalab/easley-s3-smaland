import React, { Component } from 'react';

class ImageUpdate extends Component {
    render() {
        const {fakeFileClick, fileInput, dataBack} = this.props;
        return (
            <React.Fragment>
                <p className="item-label">Imagen de perfil</p>
                <form className="container-image">
                    <button className="image-link" type="button" onClick={fakeFileClick}>Añadir imagen</button>
                    <input type="file" ref={fileInput} name="" id="img-selector" /*className="action__hiddenField"*/ />
                </form>
                <div className="image-preview image-preview-small">
                    <img className="image-preview image-preview__file"src={dataBack.photo} alt={dataBack.name}></img>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageUpdate;
