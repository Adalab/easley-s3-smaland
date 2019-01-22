import React, { Component } from 'react';

class ImageUpdate extends Component {
    render() {
        const { fakeFileClick, fileInput, dataBack } = this.props;
        return (
            <React.Fragment>
                <p className="item-label">Imagen de perfil</p>
                <div className="container-image">
                    <button className="image-link" type="submit" onClick={fakeFileClick}>Añadir imagen</button>
                    <input className="action__hiddenField" type="file" ref={fileInput} name="" id="img-selector"/>
                <div className="image-preview image-preview-small">
                    <img className="image-preview image-preview__file" src={dataBack.photo} alt={dataBack.name}></img>
                </div>
                </div >
            </React.Fragment >
        );
    }
}

export default ImageUpdate;
