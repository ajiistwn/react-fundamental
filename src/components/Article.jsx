function Article({ title, tags, date }) {
    // const name = "Aji Setiawan"
    return (
        <>
            <h3>{title}</h3>
            <small>Date: {date}, Tags: {tags.join(", ")}</small>
        </>
    )
}

export default Article