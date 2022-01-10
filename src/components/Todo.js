import React from 'react';

class Todo extends React.Component {

    render(){
        return(
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

export default Todo;