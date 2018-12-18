import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
// import dependencies
import { connect } from 'react-redux';
// import actions
import { addFilms } from './actions/filmsAction'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
            <Content films={this.props.films}/>
        </div>  
      </div>
    );
  }
  
  // fetching data on componentDidMount lifecycle method
  componentDidMount () {
    this.props.addFilms();
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilms: () => dispatch(addFilms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
