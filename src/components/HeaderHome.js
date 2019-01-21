import React, { Component } from "react";
import LogoCards from "../images/descarga.svg";

class HeaderHome extends Component {
  render() {
    return (
      <header className="header__container">
        <div className="header__position">
          <div className="header__firstGonext">
            <img
              className="header__firstLogo"
              src={LogoCards}
              alt="logo awesome profile-cards"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
