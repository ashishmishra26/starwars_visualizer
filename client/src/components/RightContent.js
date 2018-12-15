import React, { Component } from 'react'
import './rightcontent.css'
import Card from './Card';

export default class RightContent extends Component {
  render() {
    // let films = ['A new hope']; 
    return (
      <div className="right-content col-9 row no-gutters ml-auto">
      <Card title={'A new hope'}/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    )
  }
}
