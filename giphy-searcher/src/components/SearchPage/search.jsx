import './styles.css'
import { useState, useEffect } from 'react'

function Search() {
  const [query, setQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])
  const [searchResults, setSearchResults] = useState(null)


  // UPDATING MY SEARCH RESULT TO WHATEVER WAS SEARCH BY USER
  // WHICH THEN MAPS THROUGH THE RESULTS AND PULLS THE IMAGE URL through src
  // 
  useEffect(() => {
    if (queryResults.length > 0) {
      const results = queryResults.map((imageUrl, i) => (
        <img key={i} src={imageUrl} alt={`GIF ${i}`} />
      ))
      setSearchResults(results)
    }
  }, [queryResults])

  // MY FUNCTION THAT FETCHES API SEARCH QUERY
  //TURN DATA INTO JSON
  // THE DATA IS THEN MAPPED SET TO THE IMAGES OF THE USER'S SEARCH to imageURLS which was the src for the pictures in the useffect
  // THEN THOSE IMAGES ARE SET TO BE THE RESULT OF THE USER'S "QUERY"
  const handleQuerySubmit = async (event) => {
    event.preventDefault()
    console.log(query)
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=gFLjl3lP5EhoxffaamxiQnrmpSxoLQ48&limit=50&rating=g&q=${query}`
    )
    const apiResponse = await res.json()
    console.log(apiResponse)
    const { data } = apiResponse
    const imageUrls = data.map((gif) => gif.images.fixed_height.url)
    setQueryResults(imageUrls)
  }
  return (
    <>
      <div className="search-page p-10">
        <form onSubmit={handleQuerySubmit} className="searchBar">
          <label htmlFor="search" className="block font-medium mb-1">
            <h1 className="text-3xl font-bold">Any Gif You'd Like to Find?</h1>
            <p>Showing results for GIF: {query} </p>
          </label>
          <br />
          <input
            className="p-2 w-[60vw] rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            name="search"
            placeholder="Baby yoda dancing ... "
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="gallery mt-8">{searchResults}</div>
      </div>
    </>
  )
}

export default Search
