import { useNavigate, useParams } from 'react-router-dom';
import MOVIES from '../data';

const MovieDetail = () => {
  const { filmSlug } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find(m => m.slug === filmSlug);

  if (!movie) return <div className="container"><h1>Film Bulunamadı.</h1></div>;

  return (
    <div className="container">
      <button onClick={() => navigate('/filmler')} style={{background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 800, marginBottom: '2rem', fontSize: '1rem'}}>← GERİ DÖN</button>
      <div className="detail-view" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem'}}>
        <img src={movie.poster} alt={movie.title} style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}} />
        <div>
          <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0, fontWeight: 800, letterSpacing: '-3px', lineHeight: 1}}>{movie.title}</h1>
          <div style={{display: 'flex', gap: '20px', margin: '1.5rem 0', fontWeight: 800, fontSize: '1.2rem'}}>
             <span style={{color: 'var(--primary)'}}>★ {movie.rating}</span>
             <span>{movie.year}</span>
          </div>
          <p style={{color: '#888', fontSize: '1.1rem', lineHeight: '1.6'}}>{movie.excerpt}</p>
          <p style={{marginTop: '2rem', fontSize: '1.1rem'}}><strong>Yönetmen:</strong> {movie.director}</p>
          <button className="btn-primary" style={{width: '100%', marginTop: '2rem', padding: '1.2rem'}} onClick={() => navigate(`/film/${MOVIES[Math.floor(Math.random() * 20)].slug}`)}>Başka Bir Film Öner 🎲</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;