import React, { Component } from 'react';
import Card from './Card.js';

class ContainerCard extends Component{
    render(){
        return(
            <section className="section__card">
              <Card />
            </section>
        )
    }
}

export default ContainerCard;