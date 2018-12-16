/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import PageHeader from './components/PageHeader'
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
            <PageHeader />
            <Content films={this.state.films}/>
        </div>  
      </div>
    );
  }
  
  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    axios.get('https://swapi.co/api/films')
    .then(response => {
      // this.setState({films: response.data});
      let films = response.data.results,
      updatedFilms = films;
      console.log(films);
      films.forEach(function(film, indexOfFilm) {
        for (let key in film) {
          if (film[key] instanceof Array) {
            let arrayProperty = film[key];
            arrayProperty.forEach(function(valueOfProp, indexOfProp){
              console.log(valueOfProp);
              axios.get(valueOfProp).then(function(result){
                updatedFilms[indexOfFilm][key][indexOfProp] = result.data;
                // console.log(updatedFilms[indexOfFilm][key][indexOfProp]);
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
