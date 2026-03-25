// components/Navbar.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Dinamik Avatar URL'i (Senin eklemene gerek yok)
  const avatarUrl = `https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff&rounded=true&bold=true`;

  return (
    <nav style={{ 
      padding: '0 2rem', 
      height: '70px',
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
    }}>
      <h3 style={{ color: 'var(--primary)', fontWeight: 800 }}>MuhammedEdev</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Tema Değiştirme Butonu (Emoji ile temiz durur) */}
        <button onClick={toggleTheme} className="btn-icon" style={{background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer'}}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <div style={{ height: '30px', width: '1px', background: 'var(--border)' }}></div>
        
        {/* Kullanıcı Bilgileri ve Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>{user.name}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.role}</p>
          </div>
          <img src={avatarUrl} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="user avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;