import React, { Component } from 'react';
import './App.css';
import Content from './components/Content'
import PageHeader from './components/PageHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
      <PageHeader />
      <Content />
      </div>
    );
  }
}

export default App;
