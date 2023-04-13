import React, { useEffect, useState } from 'react'
import '../styles/searchbar.css'

const SearchBar = ({userDetails, setFilteredProfiles}) => {
const [query, setQuery] = useState("")
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

     const handleSearch = (event) => {
        if(query.length < 1 && event.target.value.trim().length < 1) return; 
        console.log(event.target.value, "event.target.value");
        setQuery(event.target.value)
        // if (!event.target.value) {
        //     setFilteredProfiles(userDetails)
        // }
    }
    useEffect(()=>{
        let filteredData = [...userDetails]
        filteredData = (filteredData.filter((profile) =>{
           return (
               // profile.title.toLowerCase().includes(event.target.value.toLowerCase()) || the assignment did not include title as a parameter
               profile.firstName.toLowerCase().startsWith(query.toLowerCase()) || 
               profile.lastName.toLowerCase().startsWith(query.toLowerCase())
           )
       }))
       setFilteredProfiles(filteredData);
    }, [query])

  return (
    <div className="search-container">
        {/* <form onSubmit={handleSubmit}> */}
            <input type="text" value={query} placeholder="Search by name..." onChange={handleSearch}/>
        {/* </form> */}
    </div>
  )
}

export default SearchBar;