import React, { Component } from 'react'
import Card from './Card';
import './css/moviedetail.css'

export default class MovieDetail extends Component {
  render() {
    let {movieData} = this.props, 
    arrProperties = [];

    for (let key in movieData) { // checking for properties in data which are of type Array.
      if (movieData[key] instanceof Array) {
        arrProperties.push(key);
      }
    }

    return (
      <div className="movie-detail col-10 ml-auto">
        {
          (arrProperties.map((prop, index) => {
          var content = this.generateContent(movieData[prop]); // content for inner card is done in a function
          return <Card key={index} index={index} title={prop} content={content} height={'360px'} styleForContent={{'overflowY': 'hidden'}} extraClass={'movie-card-container col-12 ml--10'} disableClick={true}></Card>
          }))
        }
      </div>
    )
  }
  /**
   * 
   * @param {Array} data this data is array of values of perticular prop type
   */
  generateContent = (data) => {
    let nonAllowedKeys = ['homeworld', 'created', 'edited', 'url']; // these peoperties will not be shown in data
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
      // creating a table row for each key-value pair in content
      for (let key in content) {
        table.push(
          <tr key={key}>
            <td className="key-table">{key}</td>
            <td>{content[key]}</td>
          </tr>
        )
      }
      // creating a table using rows generated in above process and provide it as content for innercard
      innerContent = <table className="data-table"><tbody>{table}</tbody></table>;
      return <Card key={index} index={index} title={atomicData.name} content={innerContent} height={'250px'} width={'300px'} extraClass={'movie-card-container-inner'} extraClassForContent={'inner-content-text'} styleForHeader={{'color': '#3f6f97'}} disableClick={true}/>
    });
  }
}
