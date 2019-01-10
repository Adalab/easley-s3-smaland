import React, { Component } from 'react';
import './stylesheets/scss/main.scss';
import LogoCards from './images/descarga.svg';
import CollapsableContainer from './components/CollapsableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header__container-designCard">
          <div className="header__position-card">
            <a className="header__gonext" href="../index.html" />
            <img className="header__logo" src={LogoCards} alt="logo awesome profile-cards" />
          </div>
        </header>
        <main className="created__target">
          <section className="section__card">
            <div className="container__width">
              <button className="button__reset" type="reset">
                <i className="far fa-trash-alt"></i>
                <span className="button">Reset</span>
              </button>

              <div className="box__card" id="box">

                <div className="userInfo" id="userInfo">
                  <div className="detail"></div>
                  <h2 className="userInfo__name">Nombre Apellido</h2>
                  <h3 className="userInfo__job">Front-end developer</h3>
                </div>
                <div className="img image-preview__file">
                </div>
                <ul className="list__icon">
                  <li className="list__item">
                    <a className="item__link mobile" href="">
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="list__item">
                    <a className="item__link email" href="">
                      <i className="far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="list__item">
                    <a className="item__link linkedin" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list__item">
                    <a className="item__link github" href="">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
                <div className="separation"></div>
                <ul className="list__skills">

                </ul>
              </div>
            </div>
          </section>
          <CollapsableContainer />  
        </main>
        
        <footer>
          <section className="footer__section">
            <p className="footer__text-reg">
              Awesome profile-cards &copy;2018
            </p>
            <div className="footer__conection-logo">
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
