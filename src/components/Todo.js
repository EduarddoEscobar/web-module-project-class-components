import React from 'react';

class Todo extends React.Component {

    handleClick = () => {
        this.props.handleToggleTodo(this.props.todo)
    }
    
    render(){
        return(
            <div className={`todo${this.props.todo.isCompleted ? ' completed': ''}`} onClick={this.handleClick}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

export default Todo;
