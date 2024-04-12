import React from "react";

const TodoItem = (props) => {
    return(
        <li className="todo-item">
            <div>
                <input type="checkbox" name="checkbox" id="" />
                <span className="todo-text">{props.title}</span>
            </div>
            <span>...</span>
        </li>
    );
}

export default TodoItem;