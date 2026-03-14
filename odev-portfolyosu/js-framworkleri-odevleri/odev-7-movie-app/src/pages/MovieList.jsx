import { Link } from 'react-router-dom';
import MOVIES from '../data';

const MovieList = () => (
  <div className="container">
    <div style={{marginBottom: '4rem'}}>
       <h1 style={{fontSize: '4rem', fontWeight: 800, margin: 0, letterSpacing: '-3px'}}>ARŞİV</h1>
       <p style={{color: '#666'}}>Sinema tarihinin en iyi 20 filmi burada.</p>
    </div>
    <div className="movie-grid">
      {MOVIES.map(movie => (
        <article key={movie.id} className="post-card">
          <div style={{position:'absolute', top:'15px', left:'15px', background:'var(--primary)', padding:'4px 10px', borderRadius:'5px', fontSize:'0.7rem', fontWeight:800, zIndex:2}}>{movie.year}</div>
          <img src={movie.poster} alt={movie.title} loading="lazy" />
          <div className="card-info">
            <span style={{color: 'var(--primary)', fontWeight: 800}}>İMDB {movie.rating}</span>
            <h3 className="post-title">{movie.title}</h3>
            <Link to={`/film/${movie.slug}`} className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>İncele</Link>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default MovieList;