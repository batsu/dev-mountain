import React, { useState } from "react"
import Todo from "./Todo"
import NewTask from "./NewTask"

export default function Dev6() {
    const [todoList, setTodoList] = useState([])


    let todoElements = todoList.map((item, i) => {
        return <Todo task={item} index={i} />
    })

    function handleListChange(value) {
        setTodoList([...todoList, value])
    }



    return (
        <div className="Dev7">
            <h2>My Todo List:</h2>
            <NewTask todoList={todoList} handleListChange={handleListChange} />
            {todoElements}
        </div>
    )
}