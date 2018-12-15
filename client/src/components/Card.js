import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, desc, index, height, width, extraClass} = this.props;
    let cardDimention = {
        height: height,
        width: width
    }
    return (
      <div style={cardDimention} className={`${!width && 'col-6'} ${!height && 'default-card-height'} ${extraClass}`} >
      <div className="card-header" onClick={ () => {this.handleCardClick({index})} }>{title}</div>
      <div className="card-text">{desc}</div>
      </div>
    )
  }
  handleCardClick = (index) => {
    this.props.cardClickHandler(index);
  }
}
