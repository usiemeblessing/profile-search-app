import React from 'react'
import '../styles/searchbar.css'

const SearchBar = ({userDetails, setSearchQuery}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

     const handleSearch = (event) => {
        if (!event.target.value) {
            setSearchQuery(userDetails)
        }

        const filteredData = (userDetails.filter(function(profile) {
            return (
                profile.title.toLowerCase().includes(event.target.value.toLowerCase()) || 
                profile.firstName.toLowerCase().includes(event.target.value.toLowerCase()) || 
                profile.lastName.toLowerCase().includes(event.target.value.toLowerCase())
            )
        }))
        setSearchQuery(filteredData);
    }

  return (
    <div className="search-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by name..." onChange={handleSearch}/>
        </form>
    </div>
  )
}

export default SearchBar;