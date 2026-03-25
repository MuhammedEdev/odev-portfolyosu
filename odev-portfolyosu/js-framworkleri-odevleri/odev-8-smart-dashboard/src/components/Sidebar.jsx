import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { LayoutGrid, User, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <aside className="sidebar">
      <div className="logo-area" style={{ marginBottom: '2.5rem', paddingLeft: '10px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-1px', color: 'var(--primary)' }}>MuhammedEdev</h2>
      </div>
      
      <div className="nav-link active"><LayoutGrid size={20}/> <span>Ana Sayfa</span></div>
      <div className="nav-link"><User size={20}/> <span>Profil</span></div>
      <div className="nav-link"><Settings size={20}/> <span>Sistem</span></div>

      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <div className="nav-link" style={{ color: '#ef4444' }}><LogOut size={20}/> <span>Çıkış Yap</span></div>
      </div>
    </aside>
  );
};

export default Sidebar;