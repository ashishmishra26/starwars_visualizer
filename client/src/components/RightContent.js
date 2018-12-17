import React, { Component } from 'react'
import './rightcontent.css'
import Card from './Card';
import MovieDetail from './MovieDetail'
export default class RightContent extends Component {
  render() {
    let {films, showList, movieToShow} = this.props;
    return (
      <div className="right-content col-9 no-gutters">
      { (showList) ? (films.results && films.results.map((film, index) => {return <Card key={index} index={index} title={film.title} desc={`Release Date - ${film['release_date']}\n Director - ${film['director']}\n Producer - ${film['producer']}`} extraClass={'card-container col-6 ml-25'} cardClickHandler={this.props.cardClickHandler}/>})): ''}
      { !showList && <button className="back-button" onClick={()=>{this.props.backClickHandler(1)}}>Back to list</button> }
      { !showList && <MovieDetail movieData={films.results[movieToShow]}/>}
      </div>
    )
  }
  cardClickHandler = (index) => {
      this.setState({showList: 0, movieToShow: index.index});
  }
}
