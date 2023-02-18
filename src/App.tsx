
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favorite from './pages/favorite';
import Layout from './components/layout';
import Search from './pages/search';
import Movie from './pages/movie';
import WatchList from './pages/watchList';




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="search/:query" element={<Search />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="watchlist" element={<WatchList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
