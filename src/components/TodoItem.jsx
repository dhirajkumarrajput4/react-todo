import React from "react";

const TodoItem = () => {
    return(
        <li className="todo-item">
            <div>
                <input type="checkbox" name="checkbox" id="" />
                <span>Eat</span>
            </div>
            <span>...</span>
        </li>
    );
}

export default TodoItem;