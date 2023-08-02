
import './App.css';
import {Route,Routes} from "react-router-dom";


import Home from './components/HomePage/Home';
import NavBar from './components/NavBar/NavBar';
import Characters from './components/Characters/Characters';
import Pagination from './components/Pagination/Pagination';
import CharDetails from './components/HeroDetails/CharDetails';
import Comics from './components/Comics/Comics';
import ComicsPagination from './components/Pagination/ComicsPagination';
import ComicDetails from './components/ComicDetails/ComicDetails';
import SearchResult from './components/SearchForm/SearchResult'
import Discover from './components/Discover/Discover';
import Factions from './components/Factions/Factions'
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/characters' element={<Characters/>}></Route>
        <Route exact path= '/chars/:pageNumber' element={<Pagination/>}></Route>
        <Route exact path='/chardetails/:characterId' element={<CharDetails/>}></Route>
        <Route exact path='/comics' element={<Comics/>}></Route>
        <Route exact path='/coms/:comicPageNumber' element={<ComicsPagination/>}></Route>
        <Route exact path='/comicdetails/:comicId/:comicTitle' element={<ComicDetails/>}></Route>
        <Route exact path='/searchResult/:searchString' element={<SearchResult></SearchResult>}></Route>
        <Route exact path='/discover' element={<Discover></Discover>}></Route>
        <Route exact path="/factions" element = {<Factions></Factions>}></Route>
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;
