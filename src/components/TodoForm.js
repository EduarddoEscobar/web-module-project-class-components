import React from 'react';

class TodoForm extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="todo_input" placeholder="...todo" />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;