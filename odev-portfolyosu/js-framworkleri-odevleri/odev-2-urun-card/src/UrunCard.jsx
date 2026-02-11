import React from 'react';

const UrunCard = ({ ad, fiyat, stokAdedi, kategori }) => {
  // Stok bittiyse gri arka plan, bitmediyse koyu kart rengi
  const kartStili = {
    backgroundColor: stokAdedi === 0 ? '#333' : '#111',
    border: `1px solid ${stokAdedi === 0 ? '#444' : '#00ff41'}`,
    padding: '20px',
    borderRadius: '12px',
    width: '280px',
    color: '#fff',
    fontFamily: 'sans-serif',
    transition: '0.3s'
  };

  return (
    <div style={kartStili}>
      <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>{kategori}</span>
      <h3 style={{ margin: '10px 0' }}>{ad}</h3>
      
      {/* MANTIKSAL KOŞUL: Stok varsa fiyatı göster, yoksa uyarıyı bas */}
      {stokAdedi > 0 ? (
        <div>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>Fiyat: {fiyat} ₺</p>
          <p style={{ fontSize: '12px' }}>Stokta: {stokAdedi} adet</p>
        </div>
      ) : (
        <p style={{ color: 'red', fontWeight: '800', marginTop: '20px' }}>
          BU ÜRÜN TÜKENDİ
        </p>
      )}
    </div>
  );
};

export default UrunCard;