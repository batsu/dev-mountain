import React, { useState } from "react"

export default function Dev3() {
    let newThings = ["pizza", "coffee", "tacos", "hot dogs", "flowers"]
    const [search, setSearch] = useState("")
    let changed = newThings
        .filter(thing => thing.includes(search))
        .map((thing, i) => {
            return <h2 key={i}>{thing}</h2>
        })

    function handleChange(value) {
        setSearch(value)


    }



    return (
        <div className="dev3">
            <input onChange={e => handleChange(e.target.value)} type="text" />
            {changed}
        </div>
    )
}