import './styles.css'
import DetailPage from '../DetailsPage/details'
import HomePage from '../HomePage/home'
import { Routes, Route, Link } from 'react-router-dom';

function App(){
  return(
    <>
    <nav>
    <Link to="/">Home|</Link>
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
