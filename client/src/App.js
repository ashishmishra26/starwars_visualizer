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
      this.setState({films: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
  }
}

export default App;
