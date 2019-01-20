import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section class="start__page-general">
        <div class="size__container-Firstpage">
          <h1 class="start__tittle">Crea tu tarjeta de visita</h1>
          <p class="start__slogan">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <div class="start__colocation-options" />
          <ul class="start__options">
            <li class="start__option-design option__position">
              <i class="paint__icon far fa-object-ungroup" />
              Diseña
            </li>
            <li class="start__option-stuffed option__position">
              <i class="paint__icon far fa-keyboard" />
              Rellena
            </li>
            <li class="start__option-share option__position">
              <i class="paint__icon fas fa-share-alt" />
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
