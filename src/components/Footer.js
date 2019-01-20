import React, { Component } from "react";
import LogoAdalab from "../images/logo-adalab.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer__section">
        <p className="footer__text-reg">Awesome profile-cards &copy;2018</p>
        <a className="footer__conection-logo" href="https://adalab.es/">
          <img
            className="footer__conection-logo-image"
            src={LogoAdalab}
            alt="Logo Adalab"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
