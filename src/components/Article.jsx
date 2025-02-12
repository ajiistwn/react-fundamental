import React from 'react'

function Article({ title, tags, date, isNew }) {
    // const name = "Aji Setiawan"
    return (
        <>
            <h3>{title}</h3>
            <small>Date: {date}, Tags: {tags.join(", ")}, {isNew && "-- Baru !"}</small>
        </>
    )
}

export default Article