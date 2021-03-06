import React, { Component } from 'react'
import './css/rightcontent.css'
import Card from './Card';
import MovieDetail from './MovieDetail'
export default class RightContent extends Component {
  render() {
    let {films, showList, movieIndex, cardClickHandler} = this.props;
    // condition rendering is used here, if showList prop is true the movie list is shown
    // otherwise movie detail component is shown with back button option
    return (
      <div className="right-content col-9">
      <div className="row no-gutters">
      { (showList) ? (films.results && films.results.map((film, index) => {return <Card key={index} index={index} title={film.title} content={`Release Date - ${film['release_date']}\n Director - ${film['director']}\n Producer - ${film['producer']}`} extraClass={'card-container col-5 mr-auto ml-5'} cardClickHandler={cardClickHandler} styleForContent={{'whiteSpace': 'pre-wrap'}} enableHover={true}/>})): ''}
      { !showList && <div id="button-container"><button className="back-button" onClick={()=>{this.props.backClickHandler(1)}}>Back to list</button></div> }
      { !showList && <MovieDetail movieData={films.results[movieIndex]}/>}
      </div>
      </div>
    )
  }
}
