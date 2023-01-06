import axios from "axios";
import React, { useEffect, useState } from "react";




export default function Dev8() {
    const [objectName, setObjectName] = useState("")
    const [dist, setDist] = useState("")
    const [error, setError] = useState("")
    const [date, setDate] = useState("")

    const getAPIdata = () => {
        // console.log(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${import.meta.env.VITE_NASA_KEY}`)
        axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${import.meta.env.NASA_KEY}`)
            .then(response => {
                // console.log(response)
                setObjectName(response.data.near_earth_objects["2015-09-08"][0].name)
                setDist(response.data.near_earth_objects["2015-09-08"][0].close_approach_data[0].miss_distance.miles)
                setDate(response.data.near_earth_objects["2015-09-08"][0].close_approach_data[0].close_approach_date_full)
            })
            .catch(e => {
                setError(e)
                console.log(`Error: ${e}`)
            })

    }

    function DisplayAPI() {
        if (error != "") return <h1>Problem with API!</h1>
        if (objectName === "") return <h1>Loading...</h1>
        else {
            return (
                <React.Fragment>
                    <h2>{objectName}</h2>
                    was
                    <h3>{dist}</h3>
                    miles from Earth on
                    <h4>{date}</h4>


                </React.Fragment>
            )
        }

    }

    useEffect(() => {
        getAPIdata()
    }, [])



    return (
        <div className="Div8">
            <DisplayAPI />
        </div>
    )
}