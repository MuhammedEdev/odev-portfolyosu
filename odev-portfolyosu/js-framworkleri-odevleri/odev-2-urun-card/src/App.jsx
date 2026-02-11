import React from 'react';

// 1. ÖDEV BİLEŞENİ: UrunCard
const UrunCard = ({ ad, fiyat, stokAdedi, kategori }) => {
  // Dinamik Stil Ayarları (Hocanın istediği mantık)
  const isStokYok = stokAdedi === 0;

  const cardStyle = {
    backgroundColor: isStokYok ? '#222' : '#111',
    border: `2px solid ${isStokYok ? '#444' : '#00ff41'}`,
    padding: '25px',
    borderRadius: '15px',
    width: '300px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    opacity: isStokYok ? 0.8 : 1
  };

  return (
    <div style={cardStyle}>
      <small style={{ color: '#888', textTransform: 'uppercase' }}>{kategori}</small>
      <h2 style={{ color: '#fff', margin: '0' }}>{ad}</h2>
      
      {/* MANTIKSAL KOŞULLAR */}
      {!isStokYok ? (
        <>
          <p style={{ color: '#00ff41', fontSize: '24px', fontWeight: 'bold' }}>{fiyat} ₺</p>
          <p style={{ color: '#ccc' }}>Stok: {stokAdedi} adet</p>
        </>
      ) : (
        <p style={{ color: '#ff4444', fontWeight: '900', fontSize: '20px', marginTop: '15px' }}>
          BU ÜRÜN TÜKENDİ
        </p>
      )}
    </div>
  );
};

// 2. ANA UYGULAMA
export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '30px',
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif'
    }}>
      
      {/* Ürün 1: Stokta Var */}
      <UrunCard 
        ad="Oyun Bilgisayarı" 
        fiyat={45000} 
        stokAdedi={12} 
        kategori="Elektronik" 
      />

      {/* Ürün 2: Stokta Yok (Hocanın istediği kritik test) */}
      <UrunCard 
        ad="Kablosuz Kulaklık" 
        fiyat={3200} 
        stokAdedi={0} 
        kategori="Aksesuar" 
      />

    </div>
  );
}