import React, { useState } from "react"

export default function Dev6() {
    const [todoList, setTodoList] = useState([])
    const [textInput, setTextInput] = useState("")

    let todoElements = todoList.map((item, i) => {
        return <h2 key={i}>{item}</h2>
    })

    function handleChange(value) {
        setTextInput(value)
    }

    function handleSubmit(e) {
        setTodoList([...todoList, textInput])
        setTextInput("")
        e.preventDefault()
    }

    return (
        <div className="Dev6">
            <form onSubmit={handleSubmit}>
                <input type="text" value={textInput} onChange={(e) => handleChange(e.target.value)}>
                </input>
                <button type="submit">ADD</button>
            </form>
            {todoElements}
        </div>
    )
}