// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './todo';
import './Todo.css';

class TodoList extends React.Component {

    render(){
        return(
            <div>
                {
                this.props.todos.map(todo=> (
                    <Todo key={todo.id} todo={todo} handleToggleTodo={this.props.handleToggleTodo}/>
                ))}
            </div>
        )
    }
}

export default TodoList;