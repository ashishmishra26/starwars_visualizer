import React, { Component } from 'react'
import './content.css'
import Description from './Description'
import RightContent from './RightContent'
export default class Content extends Component {
  render() {
    return (
      <div className="content col-12 row no-gutters">
        <Description />
        <RightContent />
      </div>
    )
  }
}
