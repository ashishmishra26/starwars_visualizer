import React, { Component } from 'react'
import './content.css'
import Description from './Description'
import RightContent from './RightContent'
export default class Content extends Component {
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
      <div className="content col-12 row no-gutters">
        <Description films={films} showList={this.state.showList} movieToShow={this.state.movieToShow}/>
        <RightContent films={films} showList={this.state.showList} movieToShow={this.state.movieToShow} cardClickHandler={this.cardClickHandler} backClickHandler={this.backClickHandler}/>
      </div>
    )
  }
  cardClickHandler = (index) => {
    this.setState({showList: 0, movieToShow: index.index});
  }
  backClickHandler = (value) => {
    this.setState({showList: value});
  }
}
