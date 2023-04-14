import './styles.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [gifs, setGifs] = useState({});
  // initalizing parmas here
  const params = useParams();

  useEffect(() => {
    async function getData() {
        // changing id to interpolation ${params.id} to get data of the specific id
      const res = await fetch(`https://api.giphy.com/v1/gifs/${params.id}?api_key=gFLjl3lP5EhoxffaamxiQnrmpSxoLQ48`);
      const { data } = await res.json();
      setGifs(data);
    }

    getData();
    // Updates params whenever a new gif is selected
  }, [params]);

  return (
    <>
      <div className='detailgif'>
        <img className="gifImage" src={gifs.images?.fixed_height?.url} alt={gifs.title} />
        <p><strong>Gif Title: </strong>{gifs.title}</p>
        {gifs.user && (
          <>
            <p><strong>User Avatar: </strong>{gifs.user.avatar_url}</p>
            <p><strong>User username: </strong>{gifs.user.username}</p>
            <p><strong>User Profile Url: </strong>{gifs.user.profile_url}</p>
          </>
        )}
      </div>
    </>
  );
}

export default DetailPage;
