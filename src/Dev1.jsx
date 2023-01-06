import React, { useState } from "react"

export default function Dev1() {
    const secret = import.meta.env.NASA_KEY;

    console.log(secret)
    const [text, setText] = useState("")

    function handleChange(value) {
        setText(value)
    }

    return (
        <div className="dev1">
            <input onChange={e => handleChange(e.target.value)} type="text" />
            <p>{text}</p>
        </div>
    )
}