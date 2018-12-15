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
      <div className="right-content col-9 no-gutters">
      { (this.state.showList) ? (films.results && films.results.map((film, index) => {return <Card key={index} index={index} title={film.title} desc={film['opening_crawl']} extraClass={'card-container col-6 ml-25'} cardClickHandler={this.cardClickHandler}/>})): ''}
      { !this.state.showList && <button className="back-button" onClick={()=>{this.setState({showList:1})}}>Back to list</button> }
      { !this.state.showList && <MovieDetail movieData={films.results[this.state.movieToShow]}/> }
      </div>
    )
  }
  cardClickHandler = (index) => {
      this.setState({showList: 0, movieToShow: index.index});
  }
}
