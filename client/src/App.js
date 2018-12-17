/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import './App.css';
// import PageHeader from './components/PageHeader'
import Content from './components/Content'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      films: {}
    }
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
            <Content films={this.state.films}/>
        </div>  
      </div>
    );
  }
  
  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
      fetch('https://www.swapi.co/api/films')
      .then(response => response.json())
      .then(response => {
        let films = response.results,
        updatedFilms = films;
        films.forEach(function(film, indexOfFilm) {
          for (let key in film) {
            if (film[key] instanceof Array) {
              let arrayProperty = film[key];
              arrayProperty.forEach(function(valueOfProp, indexOfProp){
                fetch(valueOfProp).then(response => response.json()).then(function(result){
                  updatedFilms[indexOfFilm][key][indexOfProp] = result;
                });
              });
            }
          }
        });
        this.setState({films: {results: updatedFilms}});
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }
}

export default App;
