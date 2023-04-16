import './styles.css'
import DetailPage from '../DetailsPage/details'
import HomePage from '../HomePage/home'
import Search from '../SearchPage/search';
import { Routes, Route, Link } from 'react-router-dom';

function App(){
  return(
    <>
    <header>
      <Link className="linkMe" to="/">
        <h1 className="center">React Gif-y Researcher</h1>
      </Link>
      <Link to="/search">Search</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/search" element={<Search />}/>
      </Routes>
    </main>
    </>
  )
}

export default App;
