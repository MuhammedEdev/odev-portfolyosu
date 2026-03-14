import { Link } from 'react-router-dom';
import MOVIES from '../data';

const Anasayfa = () => {
  const featured = MOVIES.slice(0, 4);

  return (
    <div className='home-wrapper'>
      <section className="hero-section">
        <div className="hero-content">
          <p style={{color: 'var(--primary)', fontWeight: 800, letterSpacing: '3px'}}>PREMIUM ARCHIVE</p>
          <h1>THE <span>CINEMA</span><br/>COLLECTION</h1>
          <p style={{fontSize: '1.1rem', color: '#888', maxWidth: '500px', margin: '2rem 0'}}>
            Sinema tarihinin en etkileyici başyapıtları. Damien Chazelle'den Zemeckis'e uzanan kült bir arşiv.
          </p>
          <Link to="/filmler" className="btn-cta">ARŞİVİ KEŞFET</Link>
        </div>
      </section>

      <section className="container">
        <h2 style={{fontSize: '2rem', marginBottom: '3rem', fontWeight: 800}}>Haftalık Seçki</h2>
        <div className="movie-grid">
          {featured.map(movie => (
            <div key={movie.id} className="post-card">
              <img src={movie.poster} alt={movie.title} />
              <div className="card-info">
                <span style={{color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem'}}>★ {movie.rating}</span>
                <h3 className="post-title">{movie.title}</h3>
                <Link to={`/film/${movie.slug}`} className="btn-primary" style={{display:'block', width: '100%', marginTop: '1rem'}}>İNCELE</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2>Sıradaki Başyapıtı Kaçırma</h2>
        <p style={{color: '#666'}}>Haftalık bültenimize abone olarak yeni eklenen filmlerden haberdar olun.</p>
        <div className="input-group">
          <input type="email" placeholder="E-posta adresiniz..." />
          <button className="btn-cta">ABONE OL</button>
        </div>
      </section>
    </div>
  )
}

export default Anasayfa;