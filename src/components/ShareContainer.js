import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const icon = React.createElement('i', { className: "fas fa-share-alt" });
    const text = React.createElement('p', { className: "title-dropdown__title-share" }, "Comparte");
    const divTitle = React.createElement('div', { className: "title-dropdown__icontitle title-dropdown__icon-share" }, [icon, text]);
    const arrow = React.createElement('i', { className: "arrowSa fas fa-chevron-down" });
    const divArrow = React.createElement('div', { className: "arrow-share-down" }, [arrow])
    const title = React.createElement('div', { className: "container-title " }, [divTitle, divArrow]);

    const { hidden , cardURL } = this.props;

    return (
      <Collapsible trigger={title}>
        <section className="share">
          <div className="container-section">
            <div className="container-share">
              <button type="submit" className="button-create no-clicked" onClick={this.props.sendCardToBackend}>
                <i className="far fa-address-card"></i>
                <p>Crear tarjeta</p>
              </button>
              <span className="loading"></span>
              <div className={`container-hide-section ${hidden}`}>
                <h3 className="text-hide-section">La tarjeta ha sido creada:</h3>
                <a className="link-profile-card" href={cardURL}>{cardURL}</a>
                <a className="share-twitter twitter-share-button" href={`https://twitter.com/intent/tweet?text=Mira%20mi%20tarjeta%20${cardURL}`}>
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