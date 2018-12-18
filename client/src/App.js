import React, { Component } from 'react';
import './App.css';
import Content from './containers/ContentContainer';

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


export default App;
