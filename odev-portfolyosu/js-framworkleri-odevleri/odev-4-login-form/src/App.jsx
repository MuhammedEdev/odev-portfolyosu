import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setError('');

    if (!email || !password) {
      setError('Lütfen tüm alanları doldurunuz!');
      return;
    }

    if (email === 'ornek@xyz.com' && password === '12345') {
      console.log("Giriş başarılı!"); 
      setIsLoggedIn(true); 
    } else {
      setError('E-posta veya parola hatalı!');
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  
  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="login-card success-border">
          <h1 style={{ color: '#00ff41' }}>GİRİŞ BAŞARILI</h1>
          <p style={{ color: '#fff', margin: '20px 0' }}>Hoş geldiniz, sisteme giriş yaptınız.</p>
          <button onClick={() => setIsLoggedIn(false)} className="clear-btn">Çıkış Yap</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="login-card">
        <span className="badge">Hafta 4: Form Yönetimi</span>
        <h2>Üye Giriş Formu</h2>

        <div className="form-group">
          <label>E-Posta:</label>
          <input 
            type="email" 
            value={email} 
            placeholder="ornek@xyz.com" 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Parola:</label>
          <input 
            type="password" 
            value={password} 
            placeholder="Parola" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <div className="btn-group">
          <button onClick={handleLogin} className="login-btn">Giriş Yap</button>
          <button onClick={handleClear} className="clear-btn">Temizle</button>
        </div>


        {error && <div className="error-box">{error}</div>}
      </div>
    </div>
  );
}

export default App;