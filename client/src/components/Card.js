import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, content, index, height, width, extraClass, disableClick, styleForHeader, styleForContent, extraClassForHeader, extraClassForContent} = this.props;
    let cardDimention = {
        height: height,
        width: width
    }
    return (
      <div style={cardDimention} className={`${!width && 'col-6'} ${!height && 'default-card-height'} ${extraClass} ${!disableClick && 'cursor'}`} onClick={ () => {!disableClick && this.clickHandler({index})}}>
        <div style={styleForHeader} className={`card-header ${extraClassForHeader}`}>{title}</div>
        <div style={styleForContent} className={`card-text ${extraClassForContent}`}>{content}</div>
      </div>
    )
  }
  clickHandler = (index) => {
    this.props.cardClickHandler(index);
  }
}
