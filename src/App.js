import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

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
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app conatiner">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo />
      </div>
    )
  }
}

export default App;
