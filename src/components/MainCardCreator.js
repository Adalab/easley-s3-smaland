import React, { Component } from 'react';
import ContainerCard from './ContainerCard';
import CollapsableContainer from './CollapsableContainer';

class MainCardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <main className="created__target">
                <ContainerCard 
                    dataBack={this.props.dataBack} 
                    colorClass={this.props.colorClass} 
                    fontClass={this.props.fontClass} 
                />
                <CollapsableContainer 
                    skills={this.props.skills} 
                    handleColorInput={this.props.handleColorInput} 
                    handleFontInput={this.props.handleFontInput} 
                    dataBack={this.props.dataBack} 
                />
            </main>
        );
    }
}

export default MainCardCreator;
