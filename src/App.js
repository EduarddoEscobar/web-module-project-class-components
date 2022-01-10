import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    title: 'Learn setState()',
    id: 1,
    isCompleted: true,
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

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <div>
          <TodoForm />
          <button>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
