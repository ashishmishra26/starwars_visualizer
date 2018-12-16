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
        return <Card key={index} index={index} height={'300px'} desc={desc} extraClass={'movie-card-container col-12 ml--10'} title={prop} disableClick={true}>
        </Card>}))}
      </div>
    )
  }
  generateContent (data) {
    return data.map((value, index) => {
      let atomicData = data[index], 
      desc = {},
      table = [],
      innerDesc;
      for (let key in atomicData) {
        if (!(atomicData[key] instanceof Array) && (['homeworld', 'created', 'edited', 'url'].indexOf(key) === -1)) {
          desc[key] = atomicData[key];
        }
      }
      for (let key in desc) {
        table.push(
        <tr key={key}><td key={key}>{key.toUpperCase()}</td><td>{desc[key]}</td></tr>
        )
      }
      innerDesc = <table className="data-table"><tbody>{table}</tbody></table>;
      return <Card key={index} index={index} height={'200px'} width={'300px'} extraClass={'movie-card-container-inner'} styleForHeader={{'color': '#3f6f97'}} title={atomicData.name} desc={innerDesc} disableClick={true}/>
    });
  }
}
