import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/PageHeader'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
            <PageHeader />
            <Content />
        </div>    
      </div>
    );
  }
}

export default App;
