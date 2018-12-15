import React, { Component } from 'react'
import './content.css'
import Description from './Description'
export default class Content extends Component {
  render() {
    return (
      <div className="content col-12">
        <Description />
      </div>
    )
  }
}
