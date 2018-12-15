import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, desc, index} = this.props;
    return (
      <div className="card-container col-6">
      <div className="card-header" onClick={ () => {this.handleCardClick({index})} }>{title}</div>
      <div className="card-text">{desc}</div>
      </div>
    )
  }
  handleCardClick (index) {
    console.log(index);
  }
}
