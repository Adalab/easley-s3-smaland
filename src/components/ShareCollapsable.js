import React, { Component } from 'react';

class ShareCollapsable extends Component {
    render() { 
        return ( 
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
         );
    }
}
 
export default ShareCollapsable;