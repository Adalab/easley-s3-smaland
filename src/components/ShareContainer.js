import React, { Component } from "react";
import Collapsible from "react-collapsible";
import propTypes from "prop-types";

class ShareContainer extends Component {
  render() {
    const icon = <i className="fas fa-share-alt" />;
    const text = <p className="title-dropdown__title-share">Comparte</p>;
    const divTitle = (
      <div className="title-dropdown__icontitle title-dropdown__icon-share">
        {icon}
        {text}
      </div>
    );
    const arrow = <i className="arrowSa fas fa-chevron-down" />;
    const divArrow = <div className="arrow-share-down">{arrow}</div>;
    const title = (
      <div className="container-title">
        {divTitle}
        {divArrow}
      </div>
    );
    const {
      cardURL,
      hidden,
      cardCreationLoading,
      sendCardToBackend
    } = this.props;
    return (
      <Collapsible trigger={title}>
        <section className="share">
          <div className="container-section">
            <div className="container-share">
              <button
                type="submit"
                className="button-create no-clicked"
                onClick={sendCardToBackend}
              >
                <i className="far fa-address-card" />
                <p>Crear tarjeta</p>
              </button>

              {cardCreationLoading ? (
                <span className="loading">Loading...</span>
              ) : (
                <div className={`container-hide-section ${hidden}`}>
                  <h3 className="text-hide-section">
                    La tarjeta ha sido creada:
                  </h3>
                  <a
                    className="link-profile-card"
                    href={cardURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardURL}
                  </a>
                  <a
                    className="share-twitter twitter-share-button"
                    href={`https://twitter.com/intent/tweet?text=Mira%20mi%20tarjeta%20${cardURL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                    <p className="share-twitter-text">Compartir en twitter</p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </Collapsible>
    );
  }
}

ShareContainer.propTypes = {
  cardURL: propTypes.string.isRequired,
  hidden: propTypes.string.isRequired,
  cardCreationLoading: propTypes.bool.isRequired,
  sendCardToBackend: propTypes.func.isRequired
};

export default ShareContainer;
