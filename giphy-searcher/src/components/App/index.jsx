import { useEffect, useState } from 'react'
import './styles.css'

function App() {
  const [gifs, setGifs] = useState([0])
  useEffect(() => {
    async function getData(){
      const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=gFLjl3lP5EhoxffaamxiQnrmpSxoLQ48&limit=50&rating=g')
      const {data} = await res.json()
      setGifs(data)
      console.log(gifs)
    }
    // CALLING FUNCTIONS HERE
  getData()
  
  }, []) 
  return (
    <>
    <h1>React Giphy Searcher</h1>
    <div className="gifs-container">
    {gifs.map((gif) => (
   gif.images && <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
      </div>
    </>
         
  );
}

export default App;
