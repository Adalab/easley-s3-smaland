import React, { Component } from 'react';

class ImageUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            fr: new FileReader()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addImageToState = this.addImageToState.bind(this);
        this.fileInput = React.createRef();
    }

    addImageToState() {
        this.setState({ url: this.state.fr.result });
    }

    handleSubmit(event) {
        event.preventDefault();
        const fileUpdatedByUser = this.fileInput.current.files[0];
        console.log(fileUpdatedByUser);
        this.state.fr.addEventListener('load', this.addImageToState);
        this.state.fr.readAsDataURL(fileUpdatedByUser);
    }

    sendUrlToDataBack(){
        const {dataBack} = this.props;
        console.log(dataBack);
    }
    

    render() {
        return (
            <React.Fragment>
                <p className="item-label">Imagen de perfil</p>
                <form className="container-image" onSubmit={this.handleSubmit}>
                    <button className="image-link" type="submit">Añadir imagen</button>
                    <input type="file" ref={this.fileInput} name="" id="img-selector" /*className="action__hiddenField"*/ />
                </form>
                <div className="image-preview image-preview-small">
                    <img src={this.state.url} alt=""></img>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageUpdate;