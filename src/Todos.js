import React from 'react';

const Todos = ({todos, deleteTodo, setUpdate}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    {/* <input type="text" id={todo.key} value={todo.text} onChange={(e)=>{
                        todos.setUpdate(e.target.value,todo.key)
                    }}/> */}
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left.</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos