import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { dataBack } = this.props;
        const nameDefault = "Nombre Apellido";
        const jobDefault = "Front-End Developer";
        return (
            <div className={`box__card ${this.props.colorClass}`} id="box">
                <div className={`userInfo ${this.props.fontClass}`} id="userInfo">
                    <div className="detail"></div>
                    <h2 className="userInfo__name">{dataBack.name || nameDefault} </h2>
                    <h3 className="userInfo__job">{dataBack.job || jobDefault}</h3>
                </div>
                <div className="img image-preview__file">
                <img src={dataBack.photo} alt={dataBack.name}></img>
                </div>
                <ul className="list__icon">
                    <li className="list__item">
                        <a className="item__link mobile" href={dataBack.phone}>
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li className="list__item">
                        <a className="item__link email" href={`mailto:${dataBack.email}`}>
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li className="list__item">
                        <a className="item__link linkedin" href={`https://www.linkedin.com/in/${dataBack.linkedin}`}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="list__item">
                        <a className="item__link github" href={`https://www.github.com/${dataBack.github}`}>
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </li>
                </ul>
                <div className="separation"></div>
                <ul className="list__skills">
                    {dataBack.skills.map((skill, i) => {
                        return (
                            <li key={i} className="list__item-skills">
                                {skill}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Card;