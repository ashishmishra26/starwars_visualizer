import React, { Component } from 'react'
import './rightcontent.css'
import Card from './Card';

export default class RightContent extends Component {
  render() {
    let {films} = this.props;
    return (
      <div className="right-content col-9 row no-gutters ml-auto">
      { films.results && films.results.map((film, index) => {return <Card key={index} title={film.title} desc={film['opening_crawl']}/>})}
      </div>
    )
  }
}
