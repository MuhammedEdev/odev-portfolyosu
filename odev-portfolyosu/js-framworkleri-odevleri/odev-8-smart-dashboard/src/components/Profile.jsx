import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user, updateName } = useContext(UserContext);
  const [tempName, setTempName] = useState(user.name);

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
          style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid var(--primary)' }} 
          alt="avatar" 
        />
        <div>
          <h1 style={{ fontSize: '1.8rem' }}>Hoş geldin, {user.name}</h1>
          <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{user.role} Hesabı</p>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <h3>Profil Bilgilerini Düzenle</h3>
        <div style={{ marginTop: '1rem' }}>
          <label style={{ fontSize: '0.9rem', opacity: 0.7 }}>Adınız Soyadınız</label>
          <input value={tempName} onChange={(e) => setTempName(e.target.value)} />
          <button className="primary-btn" onClick={() => updateName(tempName)}>Değişiklikleri Uygula</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;