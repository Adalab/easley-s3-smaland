import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const icon = (
      <i className="fas fa-share-alt" />
    );
    const text = (
      <p className="title-dropdown__title-share">
        Comparte
      </p>
    );
    const divTitle = (
      <div className="title-dropdown__icontitle title-dropdown__icon-share">
        {icon}
        {text}
      </div>
    );
    const arrow = (
      <i className="arrowSa fas fa-chevron-down" />);
    const divArrow = (
      <div className="arrow-share-down">
        {arrow}
      </div>
    );
    const title = (
      <div className="container-title">
        {divTitle}
        {divArrow}
      </div>
    );
    return (
      <Collapsible trigger={title}>
        <section className="share">
          <div className="container-section">
            <div className="container-share">
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
      </Collapsible>
    );
  }
}

export default ShareContainer;