import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addFilms } from './actions/filmsAction'
import Content from './components/Content';

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
