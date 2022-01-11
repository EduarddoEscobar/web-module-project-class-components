import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    title: 'Learn setState()',
    id: 1,
    isCompleted: false,
  },
  {
    title: 'Style my Todo List',
    id: 2,
    isCompleted: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos
    };
  }

  handleClearTodos = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.isCompleted)
    })
  }

  handleAddTodo = (newTodo) => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggleTodo = (selectedTodo) => {
    console.log(selectedTodo);
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => 
        (selectedTodo.id === todo.id ? {...todo, isCompleted: !todo.isCompleted} : todo)
      )
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} handleToggleTodo={this.handleToggleTodo}/>
        <div>
          <TodoForm handleAddTodo={this.handleAddTodo} />
          <button onClick={this.handleClearTodos}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
