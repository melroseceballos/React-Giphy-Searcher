import './styles.css'
import DetailPage from '../DetailsPage/details'
import HomePage from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom';

function App(){
  return(
    <>
    <header>
      <h1 className="center">React Gif-y Researcher</h1>
    </header>
    <nav>
    <Link className="linkMe" to="/">Take Me Home</Link>
    {/* // I COMMENTED OUT THE DETAIL BECAUSE I DON'T WANT IT TO BE A PART OF THE NAV */}
    {/* <Link to="/detail">Detail</Link> */}
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>

    </main>
    </>
  )
}
export default App;
