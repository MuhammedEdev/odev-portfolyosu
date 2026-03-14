import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{textAlign:'center', padding:'10rem 0'}}>
    <h1 style={{fontSize:'8rem', color: 'var(--primary)', margin: 0}}>404</h1>
    <h2>Kaybolmuş Gibisiniz...</h2>
    <Link to="/" className="read-more" style={{display:'inline-block', width:'auto', padding:'1rem 2rem', marginTop:'2rem'}}>Ana Sayfaya Dön</Link>
  </div>
);
export default NotFound;