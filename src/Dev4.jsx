import React, { useState } from "react"

export default function Dev4() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function handleUser(value) {
        setUser(value)
    }

    function handlePassword(value) {
        setPassword(value)
    }

    function handleSubmit(e) {
        alert(`Username: ${user} \nPassword: ${password}`)
        e.preventDefault()
    }



    return (
        <div className="div4">
            <form onSubmit={handleSubmit}>
                <label for="user">Username:</label>
                <input type="text" onChange={e => handleUser(e.target.value)}></input>
                <label for="password">Password:</label>
                <input type="password" onChange={e => handlePassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}