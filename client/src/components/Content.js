import React, { Component } from 'react'
import './content.css'
import Description from './Description'
import RightContent from './RightContent'
import { connect } from 'react-redux'
import { toggleListVisibility } from '../actions/listAction.js'
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showList: 1,
        movieToShow: undefined
    }
  }
  render() {
    console.log(this.props);
    let {films} = this.props;
    return (
      <div className="content col-12 row no-gutters">
        <Description films={films} showList={this.props.showList} movieIndex={this.props.movieIndex}/>
        <RightContent films={films} showList={this.props.showList} movieIndex={this.props.movieIndex} cardClickHandler={this.cardClickHandler} backClickHandler={this.backClickHandler}/>
      </div>
    )
  }
  cardClickHandler = (index) => {
    console.log(index);
    this.props.toggleListVisibility(0, index.index);
  }
  backClickHandler = (visibility) => {
    this.props.toggleListVisibility(visibility, undefined);
  }
}
const mapStateToProps = (state) => {
  return {
    showList: state.showList,
    movieIndex: state.movieIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleListVisibility: (visibility, movieIndex) => dispatch(toggleListVisibility(visibility, movieIndex))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);