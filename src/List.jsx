import React from "react"

export default function List(props) {
    return props.todoList.map((item, i) => {
        return <h2 key={i}>{item}</h2>
    })
}