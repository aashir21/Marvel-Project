import React from 'react'
import './SearchForm.css'
import { useNavigate } from 'react-router-dom'

function SearchForm() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const data = document.getElementById("val").value;
        navigate(`/searchResult/${data}`)

    }

  return (

    <form onSubmit = {handleSubmit}>
        <input type="text" id='val' className='search-bar' placeholder='Enter Keyword' onChange={(e)=> e.target.value}></input>
    </form>

  )
}

export default SearchForm