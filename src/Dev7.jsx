import React, { useState } from "react"
import Todo from "./Todo"
import NewTask from "./NewTask"
import List from "./List"

export default function Dev7() {
    const [todoList, setTodoList] = useState([])


    function handleListChange(value) {
        setTodoList([...todoList, value])
    }



    return (
        <div className="Dev7">
            <h2>My Todo List (Dev7):</h2>
            <NewTask todoList={todoList} handleListChange={handleListChange} />
            <List todoList={todoList} />
        </div>
    )
}