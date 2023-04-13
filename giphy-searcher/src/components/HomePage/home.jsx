import { useState, useEffect } from 'react'
import Detail from '../Detail/detail'

function HomePage(){
        // STATING DECLARATIONS HERE
        const [gifs, setGifs] = useState([0])
        const [detailpage, setDetail] = useState()
      
        // FETCHING API USING ASYNC FUNCTION
        useEffect(() => {
          async function getData(){
            const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=gFLjl3lP5EhoxffaamxiQnrmpSxoLQ48&limit=50&rating=g')
            const {data} = await res.json()
            setGifs(data)
            // CONSOLE LOGGING TO SEE THE DATA
            console.log(gifs)
          }
          
        
          // CALLING FUNCTIONS HERE
        getData()
        // UPDATES DETAILPAGE STATE WHENEVER A NEW GIF IS SELECTED
        }, [detailpage]) 
      
            // THIS THE FUNCTION FOR THE DETAILS PAGE TO RENDER WHEN A GIF IS CLICKED 
        function gifClick (gifs){
          setDetail(gifs) 
        }
      
        return (
          <>
          <h1 className='center'>React Giphy Searcher</h1>
          <div className='gif-divs'>
            {/* ITERATES THROUGH THE GIFS DATA CALLED BY THE ASYNC FUNCTION */}
          {gifs.map((gif) => (
            // CHECKING FIRST IF THE GIF IMAGE IS THERE AND IT ALSO CONTAINS ID AND GIF IMAGE AND TITLE. ALSO ADDED MY ONCLICK HERE
         gif.images && <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} onClick={() => gifClick(gif)}/>
            ))}
            </div>
            {/* CALLING DETAIL PAGE HERE */}
            {/* THE FIRST SECTION BEFORE && CHECKS IF THE DETAIL PAGE IS NOT () 
            IT MAKES SURE THAT A GIF IS SELECTED */}
            {detailpage && <Detail gifs={detailpage}/>} 
          </>
               
        );
      }


export default HomePage