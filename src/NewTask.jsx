import React, { useState } from "react"

export default function NewTask(props) {

    const [textInput, setTextInput] = useState("")

    function handleChange(value) {
        setTextInput(value)
    }

    function handleSubmit(e) {
        props.handleListChange(textInput)
        setTextInput("")
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={textInput}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="enter some text"
            >
            </input>
            <button type="submit">ADD</button>
        </form>
    )
}