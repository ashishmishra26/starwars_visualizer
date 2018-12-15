import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, desc, index, height, width} = this.props;
    let cardDimention = {
        height: height,
        width: width
    }
    return (
      <div style={cardDimention} className={`card-container ${!width && 'col-6'} ${!height && 'default-card-height'}`} >
      <div className="card-header" onClick={ () => {this.handleCardClick({index})} }>{title}</div>
      <div className="card-text">{desc}</div>
      </div>
    )
  }
  handleCardClick = (index) => {
    this.props.cardClickHandler(index);
  }
}
