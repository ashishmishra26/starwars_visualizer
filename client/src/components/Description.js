import React, { Component } from 'react'
import './description.css'
import defaultText from '../utils/defaultDescription'
export default class Description extends Component {
  render() {
    let {films, showList, movieToShow} = this.props;
    return (
      <div className="description col-3">
        <p className="description-header">Star Wars Visualizer</p>
        <div id="text-content" className="description-text">{showList ? defaultText() : films.results[movieToShow]['opening_crawl']}</div>
      </div>
    )
  }
}
