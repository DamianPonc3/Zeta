import React from 'react'
import "./Search.css"




function Search() {

    



return (
    <div className='container-search'>
        <input type="text" placeholder='Buscar' className='input-search'></input>
        <span className="icon-search">
            <img src="./assets/search.png" alt="search"/>
        </span>
    </div>
    )
}

export default Search