import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        const {value} = e.target;
        this.state.input = value;
    }

    handleSubmit = e => {
        e.preventDefault();
        const todo = {
            title: this.state.input,
            id: Date.now(),
            isCompleted: false
        }
        this.props.handleAddTodo(todo);
        this.setState({
            ...this.state,
            input: ''
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="todo_input" placeholder="...todo" />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;