import { type } from "os";
import React from "react";
import {ACTIONS} from "./page.tsx"

function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color: todo.completed? "#aaa" : "#000"}}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({type: "deleteTodo", payload: {id: todo.id}})}>Delete</button>
            <button onClick={() => dispatch({type: "toggleTodo", payload: {id: todo.id}})}>Toggle</button>
        </div>
    )
}

export default Todo;