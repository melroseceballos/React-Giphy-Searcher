import './styles.css'
import { useState } from 'react'
import HomePage from '../HomePage/home'

function Search(props)   {
    const [query, setQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])

    const handleQuerySubmit = async (event) => {
        event.preventDefault()
        console.log(query)
        const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=gFLjl3lP5EhoxffaamxiQnrmpSxoLQ48&q=${encodeURIComponent(query)}&limit=50')
        const apiResponse = await res.json()
        console.log(apiResponse)
        const { data } = apiResponse
        setQueryResults(data)
    }

    return( 
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
                        onChange={event => setQuery(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="mx-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 bg-gray-700 rounded transition-all duration-200"
                    >
                        Search
                    </button>
                </form>

                <div className="gallery mt-8">
                    {queryResults.length > 0 && queryResults.map((gifs, i) => {
                        return <HomePage
                            key={i}
                            gifs={gifs}
                            updateHomePage={props.setHomePage}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default Search
