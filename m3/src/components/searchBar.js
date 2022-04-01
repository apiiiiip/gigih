import React from 'react'

function Searchbar({handleSearch, handleInputChange}) {
  return (
    <form onSubmit={handleSearch}>
        <input onChange = {(e) => handleInputChange( e.target.value)}/>
        <button type='submit'>Search</button>

    </form>
  )
}

export default Searchbar;