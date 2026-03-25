import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import './App.css';

function App() {
  // Artık burası hata vermez, çünkü yukarıda (main.jsx'te) ThemeProvider var!
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-layout ${theme}`}>
      <Sidebar />
      <div className="main-view">
        <Navbar />
        <div className="content-area">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;