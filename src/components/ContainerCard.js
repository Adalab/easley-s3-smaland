import React, { Component } from 'react';

class ContainerCard extends Component{
    render(){
        return(
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
        )
    }
}

export default ContainerCard;