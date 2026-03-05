import React, { useState } from 'react';
import './App.css';

/**
 * ANA UYGULAMA (APP)
 */
function App() {
  // Örnek veriler (Sistemin çalıştığını teyit etmek için)
  const [ogrenciler, setOgrenciler] = useState([
    { id: 1, ad: "Ahmet Yılmaz", bolum: "Bilgisayar Mühendisliği" },
    { id: 2, ad: "Ayşe Demir", bolum: "Mimarlık" }
  ]);

  // Yeni öğrenci ekleme (Lifting State Up)
  const ogrenciEkle = (yeniVeri) => {
    const yeniOgrenci = { 
      id: Date.now(), 
      ad: yeniVeri.ad, 
      bolum: yeniVeri.bolum 
    };
    setOgrenciler([...ogrenciler, yeniOgrenci]);
  };

  // Silme fonksiyonu
  const ogrenciSil = (id) => {
    setOgrenciler(ogrenciler.filter(o => o.id !== id));
  };

  return (
    <div className="sayfa-konteyner">
      <main className="ana-kart">
        <header className="baslik-bolumu">
          <h1>Akademik Kayıt Portalı 🎓</h1>
          <p>Sistemde <strong>{ogrenciler.length}</strong> öğrenci kayıtlıdır.</p>
        </header>

        <div className="panel-izgara">
          {/* Form Kısmı */}
          <section className="form-alani">
            <h3>Yeni Kayıt Oluştur</h3>
            <OgrenciFormu onKaydet={ogrenciEkle} />
          </section>

          {/* Liste Kısmı */}
          <section className="liste-alani">
            <h3>Kayıtlı Öğrenciler</h3>
            <div className="tablo-sarma">
              <table className="modern-tablo">
                <thead>
                  <tr>
                    <th>Ad Soyad</th>
                    <th>Bölüm</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {ogrenciler.map((o) => (
                    <tr key={o.id}>
                      <td className="isimlendirme">{o.ad}</td>
                      <td>{o.bolum}</td>
                      <td>
                        <button onClick={() => ogrenciSil(o.id)} className="sil-btn">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/**
 * FORM BİLEŞENİ
 */
function OgrenciFormu({ onKaydet }) {
  const [ad, setAd] = useState("");
  const [bolum, setBolum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ad && bolum) {
      onKaydet({ ad, bolum });
      setAd("");
      setBolum("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="kayit-formu">
      <div className="input-grubu">
        <label>Öğrenci Adı</label>
        <input value={ad} onChange={(e) => setAd(e.target.value)} placeholder="Örn: Caner Korkmaz" required />
      </div>
      <div className="input-grubu">
        <label>Bölümü</label>
        <input value={bolum} onChange={(e) => setBolum(e.target.value)} placeholder="Örn: Yazılım" required />
      </div>
      <button type="submit" className="kaydet-btn">Öğrenciyi Kaydet</button>
    </form>
  );
}

export default App;