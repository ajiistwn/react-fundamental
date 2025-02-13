import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context'

function Article({ title, tags, date, isNew }) {
    // const name = "Aji Setiawan"
const user = useContext(GlobalContext)

    return (
        <>
            <h3>{title}</h3>
            <small>Date: {date}, Tags: {tags.join(", ")}, {isNew && "-- Baru !"}</small>
            <div>do tulis oleh {user.username}</div>
        </>
    )
}

export default Article