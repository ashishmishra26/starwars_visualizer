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
        var desc = this.generateContent(movieData[prop]);
        console.log(desc);
        return <Card key={index} index={index} height={'300px'} desc={desc} extraClass={'movie-card-container col-12 ml--10'} title={prop}>
        </Card>}))}
      </div>
    )
  }
  generateContent (data) {
    return data.map((value, index) => {
      return <Card key={index} index={index} height={'200px'} width={'300px'} extraClass={'movie-card-container-inner'} title={value}/>
    });
  }
}
