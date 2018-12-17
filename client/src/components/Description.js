import React, { Component } from 'react'
import './description.css'
import defaultText from '../utils/defaultDescription'
export default class Description extends Component {
  render() {
    console.log('desc prop', this.props);
    let {films, showList, movieIndex} = this.props;
    return (
      <div className="description col-3">
        <p className="description-header">Star Wars Visualizer</p>
        <div id="text-content" className="description-text">{showList ? defaultText() : films.results[movieIndex]['opening_crawl']}</div>
      </div>
    )
  }
}
