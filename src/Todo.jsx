import React from "react"

export default function Todo(props) {
    return <h2 key={props.index}>{props.task}</h2>
}