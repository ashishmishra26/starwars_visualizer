import React, { Component } from 'react'
import './css/card.css';

export default class Card extends Component {
  render() {
    let {title, content, index, height, width, extraClass, disableClick, enableHover, styleForHeader, styleForContent, extraClassForHeader, extraClassForContent} = this.props, //these props are provided used to make card configurable. 
    cardDimention = {
        height: height,
        width: width
    };
    // card component has two parts header and content
    return (
      <div style={cardDimention} className={`${!width && 'col-6'} ${!height && 'default-card-height'} ${extraClass} ${!disableClick && 'cursor'}`} onClick={() => {!disableClick && this.clickHandler({index})}} onMouseOver={(e) => {enableHover && this.mouseOverHandler(e)}} onMouseOut={(e) => {enableHover && this.mouseOutHandler(e)}}>
        <div style={styleForHeader} className={`card-header ${extraClassForHeader}`}>{title}</div>
        <div style={styleForContent} className={`card-text ${extraClassForContent}`}>{content}</div>
      </div>
    )
  }
  /**
   * this function is called when card is clicked
   * index is provide to it and then this function intenally call parent click handler with given index
   */
  clickHandler = (index) => {
    this.props.cardClickHandler(index);
  }
  mouseOverHandler = (e) => {
    e.target.parentElement.style.transform = 'scale(1.1)';
  }
  mouseOutHandler = (e) => {
    e.target.parentElement.style.transform = 'scale(1)';
  }
}
