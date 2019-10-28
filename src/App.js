import React, { Component } from 'react';
import Todos from './Todos';

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
  deleteTodo = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div className="todo-app conatiner">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
