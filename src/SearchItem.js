import React from 'react'

const SearchItem = ({ colorValue, setColorValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Add color name</label>
        <input autoFocus id='search' type="text" role='searchbox' placeholder='Add color name' required value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
        <button type='button' onClick={() => setIsDarkText(!isDarkText) }>
            Toggle Text Color
        </button>
    </form>
  )
}

export default SearchItem