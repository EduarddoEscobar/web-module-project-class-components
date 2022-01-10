// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {

    render(){
        return(
            <div>
                {/* {
                this.props.todos.map(todo=> (
                    <Todo key={todo.id} todo={todo}/>
                ))} */}
                <Todo todo={this.props.todos}/>
            </div>
        )
    }
}

export default TodoList;