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
        var content = this.generateContent(movieData[prop]);
        return <Card key={index} index={index} height={'360px'} content={content} styleForContent={{'overflowY': 'hidden'}} extraClass={'movie-card-container col-12 ml--10'} title={prop} disableClick={true}>
        </Card>}))}
      </div>
    )
  }
  generateContent (data) {
    let nonAllowedKeys = ['homeworld', 'created', 'edited', 'url'];

    return data.map((value, index) => {
      let atomicData = data[index], 
      content = {},
      table = [],
      innerContent;
      for (let key in atomicData) {
        if (!(atomicData[key] instanceof Array) && (nonAllowedKeys.indexOf(key) === -1)) {
          content[key] = atomicData[key];
        }
      }
      for (let key in content) {
        table.push(
          <tr key={key}>
            <td className="key-table">{key}</td>
            <td>{content[key]}</td>
          </tr>
        )
      }
      innerContent = <table className="data-table"><tbody>{table}</tbody></table>;
      return <Card key={index} index={index} height={'250px'} width={'300px'} extraClass={'movie-card-container-inner'} extraClassForContent={'inner-content-text'} styleForHeader={{'color': '#3f6f97'}} title={atomicData.name} content={innerContent} disableClick={true}/>
    });
  }
}
