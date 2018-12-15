import React, { Component } from 'react'
import './rightcontent.css'
import Card from './Card';
import MovieDetail from './MovieDetail'
export default class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showList: 1,
        movieToShow: undefined 
    }
  }
  render() {
    let {films} = this.props;
    return (
      <div className="right-content col-9 row no-gutters ml-auto">
      { this.state.showList && films.results && films.results.map((film, index) => {return <Card key={index} index={index} title={film.title} desc={film['opening_crawl']}/>})}
      { !this.state.showList && <MovieDetail movieData={films.results}/> }
      </div>
    )
  }
}
