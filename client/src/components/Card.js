import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    let {title, desc} = this.props;
    return (
      <div className="card-container col-6">
      <div className="card-header">{title}</div>
      <div className="card-text">{desc}</div>
      </div>
    )
  }
}
