import React, { useState } from 'react';

function Search(props) {
    const [search, setSearch] = useState('');

    const onSearchChange = () => {
        props.onSearchChange(search)
    }

    const onSearchKeydown = (e) => {  
        if (e.key === 'Enter') {
            onSearchChange()
        }
    }

    return (
        <>
            <div>
                Cari Artikel : <input onChange={e => setSearch(e.target.value)} onKeyDown={onSearchKeydown}></input>
                <button onClick={onSearchChange}>Cari</button>
            </div>

            <small>Ditmukan {props.totalPosts} data dengan pencarian {search}</small>
        </>
    )
}

export default Search;