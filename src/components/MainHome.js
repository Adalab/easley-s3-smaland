import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class MainHome extends Component {
  render() {
    return (
      <section className="start__page-general">
        <div className="size__container-Firstpage">
          <h1 className="start__tittle">Crea tu tarjeta de visita</h1>
          <p className="start__slogan">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <div className="start__colocation-options" />
          <ul className="start__options">
            <li className="start__option-design option__position">
              <i className="paint__icon far fa-object-ungroup" />
              Diseña
            </li>
            <li className="start__option-stuffed option__position">
              <i className="paint__icon far fa-keyboard" />
              Rellena
            </li>
            <li className="start__option-share option__position">
              <i className="paint__icon fas fa-share-alt" />
              Comparte
            </li>
          </ul>
          <Link to="/card-creator">
            <Button type="button" styles="start__buton-continue">
              <span>Comenzar</span>
            </Button>
          </Link>
        </div>
      </section>
    );
  }
}

export default MainHome;
