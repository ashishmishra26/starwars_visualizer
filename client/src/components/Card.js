import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container col-6">
      <div className="card-header">{this.props.title}</div>
      </div>
    )
  }
}
