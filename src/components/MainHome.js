import React, { Component } from 'react';

class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section class="start__page-general">
                <div class="size__container-Firstpage">
                    <h1 class="start__tittle">
                        Crea tu tarjeta de visita
                    </h1>
                    <p class="start__slogan">
                        Crea mejores contactos profesionales de forma fácil y cómoda
                    </p>
                    <div class="start__colocation-options"></div>
                    <ul class="start__options">
                        <li class="start__option-design option__position">
                            <i class="paint__icon far fa-object-ungroup">
                            </i>
                            Diseña
                        </li>
                        <li class="start__option-stuffed option__position">
                            <i class="paint__icon far fa-keyboard">
                            </i>
                            Rellena
                        </li>
                        <li class="start__option-share option__position">
                            <i class="paint__icon fas fa-share-alt">
                            </i>
                            Comparte
                        </li>
                    </ul>
                    <a class="start__buton-continue" href="createdCard.html">
                        Comenzar
                    </a>
                </div>
            </section>
        );
    }
}

export default MainHome;

