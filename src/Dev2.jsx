import React from "react"

export default function Dev2() {
    const listOfThings = ["pizza", "coffee", "tacos", "hot dogs", "flowers"]

    let thingsToShow = listOfThings.map((element, i) => {
        return <h2 key={i}>{element}</h2>
    })

    return (
        <div className="dev2">
            {thingsToShow}
        </div>

    )
}