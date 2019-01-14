import React, { Component } from 'react';
import Card from './Card.js';

class ContainerCard extends Component{
    render(){
        return(
            <section className="section__card">
                <Card dataBack={this.props.dataBack} />
            </section>
        )
    }
}

export default ContainerCard;