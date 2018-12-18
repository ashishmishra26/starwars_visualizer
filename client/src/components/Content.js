import React, { Component } from 'react'
import './content.css'
import Description from './Description'
import RightContent from './RightContent'
class Content extends Component {
  render() {
    let {films, showList, movieIndex} = this.props;

    return (
      <div className="content col-12 row no-gutters">
        <Description films={films} showList={showList} movieIndex={movieIndex}/>
        <RightContent films={films} showList={showList} movieIndex={movieIndex} cardClickHandler={this.cardClickHandler} backClickHandler={this.backClickHandler}/>
      </div>
    )
  }
  /**
   * cardclickhandler calls toggleListVisibility which disable list view and show movie detail
   */
  cardClickHandler = (index) => {
    this.props.toggleListVisibility(0, index.index);
  }
  /**
   * backclickhandler calls toggleListVisibility which enables list view
   */
  backClickHandler = (visibility) => {
    this.props.toggleListVisibility(visibility);
  }
}

export default Content;