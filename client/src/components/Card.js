import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, desc, index, height, width, extraClass, disableClick, styleForHeader, styleForContent} = this.props;
    let cardDimention = {
        height: height,
        width: width
    }
    return (
      <div style={cardDimention} className={`${!width && 'col-6'} ${!height && 'default-card-height'} ${extraClass} ${!disableClick && 'cursor'}`} onClick={ () => {!disableClick && this.handleCardClick({index})}}>
      <div style={styleForHeader} className={`card-header`}>{title}</div>
      <div style={styleForContent} className={`card-text`}>{desc}</div>
      </div>
    )
  }
  handleCardClick = (index) => {
    this.props.cardClickHandler(index);
  }
}
