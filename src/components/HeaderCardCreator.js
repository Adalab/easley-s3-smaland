import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoCards from '../images/descarga.svg';

class HeaderCardCreator extends Component {
  render() {
    return (
      <header className="header__container-designCard">
        <div className="header__position-card">
          {/* <a className="header__gonext" href="../index.html" /> */}
          <Link to="/">
            <img className="header__logo" src={LogoCards} alt="logo awesome profile-cards" />
          </Link>
        </div>
      </header>
    )
  }
}


export default HeaderCardCreator;