import React, { Component } from 'react';
import Todos from './Todos';
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "study more code"},
      {id: 2, content: "collect more whiskey"},
      {id: 3, content: "oreos for holiday brownies"},
      {id: 4, content: "collect more wine"},
      {id: 5, content: "rewatch all Star Wars movies before Ep. IX"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
