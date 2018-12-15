import React, { Component } from 'react'
import Card from './Card';
import './moviedetail.css'

export default class MovieDetail extends Component {
  render() {
    let {movieData} = this.props, arrProperties = [];
    for (let key in movieData) {
      if (movieData[key] instanceof Array) {
        arrProperties.push(key);
      }
    }
    return (
      <div className="movie-detail col-10 ml-auto">
        {(arrProperties.map((prop, index) => {
        var desc = this.content(prop, index); 
        return <Card key={index} index={index} height={'300px'} desc={desc} extraClass={'movie-card-container col-12 ml--10'} title={prop}>
        </Card>}))}
      </div>
    )
  }
  content (prop, index) {
    return <Card key={index} index={index} height={'200px'} extraClass={'movie-card-container col-12 ml--10'} title={prop}/>
  }
}
