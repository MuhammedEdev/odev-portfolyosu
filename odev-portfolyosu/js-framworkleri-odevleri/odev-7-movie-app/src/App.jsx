import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Anasayfa from './pages/AnaSayfa'; // Dosya ismine dikkat (AnaSayfa.jsx)
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='blog-wrapper'>
        <NavBar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Anasayfa />}/>
            <Route path='/filmler' element={<MovieList />}/>
            <Route path='/film/:filmSlug' element={<MovieDetail />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;