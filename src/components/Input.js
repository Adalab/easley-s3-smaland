import React, { Component } from 'react';

class Input extends Component {
    state = {  }
    render() { 
        const name = this.props.name;
        return ( 
            <div>           
            <label for={name} className="item-label">{this.props.content}</label>
            <input placeholder={this.props.example} id={name} type={this.props.type} name={name} className="item-input" required/>
            </div> 
        );
    }
}

export default Input;