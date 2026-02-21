import { useState, useEffect, useMemo } from "react";
import "./App.css";

// Şehir listesi ve API ID eşleşmeleri
const SEHIRLER = [
    { ad: "Adana", id: "9158" }, { ad: "Adıyaman", id: "9167" }, { ad: "Afyonkarahisar", id: "9180" }, { ad: "Ağrı", id: "9190" }, { ad: "Amasya", id: "9201" },
    { ad: "Ankara", id: "9206" }, { ad: "Antalya", id: "9246" }, { ad: "Artvin", id: "9265" }, { ad: "Aydın", id: "9274" }, { ad: "Balıkesir", id: "9287" },
    { ad: "Bilecik", id: "9312" }, { ad: "Bingöl", id: "9321" }, { ad: "Bitlis", id: "9326" }, { ad: "Bolu", id: "9336" }, { ad: "Burdur", id: "9342" },
    { ad: "Bursa", id: "9352" }, { ad: "Çanakkale", id: "9366" }, { ad: "Çankırı", id: "9378" }, { ad: "Çorum", id: "9385" }, { ad: "Denizli", id: "9390" },
    { ad: "Diyarbakır", id: "9392" }, { ad: "Edirne", id: "9408" }, { ad: "Elazığ", id: "9415" }, { ad: "Erzincan", id: "9421" }, { ad: "Erzurum", id: "9426" },
    { ad: "Eskişehir", id: "9434" }, { ad: "Gaziantep", id: "9479" }, { ad: "Giresun", id: "9488" }, { ad: "Gümüşhane", id: "9498" }, { ad: "Hakkari", id: "9504" },
    { ad: "Hatay", id: "9515" }, { ad: "Isparta", id: "9532" }, { ad: "Mersin", id: "9539" }, { ad: "İstanbul", id: "9541" }, { ad: "İzmir", id: "9560" },
    { ad: "Kars", id: "9571" }, { ad: "Kastamonu", id: "9578" }, { ad: "Kayseri", id: "9587" }, { ad: "Kırklareli", id: "9601" }, { ad: "Kırşehir", id: "9610" },
    { ad: "Kocaeli", id: "9616" }, { ad: "Konya", id: "9676" }, { ad: "Kütahya", id: "9691" }, { ad: "Malatya", id: "9702" }, { ad: "Manisa", id: "9710" },
    { ad: "Kahramanmaraş", id: "9720" }, { ad: "Mardin", id: "9730" }, { ad: "Muğla", id: "9738" }, { ad: "Muş", id: "9753" }, { ad: "Nevşehir", id: "9761" },
    { ad: "Niğde", id: "9768" }, { ad: "Ordu", id: "9775" }, { ad: "Rize", id: "9792" }, { ad: "Sakarya", id: "9800" }, { ad: "Samsun", id: "9812" },
    { ad: "Siirt", id: "9828" }, { ad: "Sinop", id: "9834" }, { ad: "Sivas", id: "9843" }, { ad: "Tekirdağ", id: "9854" }, { ad: "Tokat", id: "9862" },
    { ad: "Trabzon", id: "9870" }, { ad: "Tunceli", id: "9882" }, { ad: "Şanlıurfa", id: "9890" }, { ad: "Uşak", id: "9900" }, { ad: "Van", id: "9907" },
    { ad: "Yozgat", id: "9916" }, { ad: "Zonguldak", id: "9924" }, { ad: "Aksaray", id: "9196" }, { ad: "Bayburt", id: "9302" }, { ad: "Karaman", id: "9569" },
    { ad: "Kırıkkale", id: "9598" }, { ad: "Batman", id: "9296" }, { ad: "Şırnak", id: "9897" }, { ad: "Bartın", id: "9291" }, { ad: "Ardahan", id: "9255" },
    { ad: "Iğdır", id: "9525" }, { ad: "Yalova", id: "9912" }, { ad: "Karabük", id: "9565" }, { ad: "Kilis", id: "9607" }, { ad: "Osmaniye", id: "9785" }, { ad: "Düzce", id: "9404" }
];

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCity, setActiveCity] = useState(SEHIRLER.find(c => c.ad === "Gaziantep"));
    const [query, setQuery] = useState("");

    // Arama filtresi - input değişince çalışır
    const filteredList = useMemo(() => {
        return SEHIRLER.filter(s => s.ad.toLowerCase().includes(query.toLowerCase()));
    }, [query]);

    const loadData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://ezanvakti.emushaf.net/vakitler/${activeCity.id}`);
            const json = await res.json();
            setData(json);
        } catch (e) {
            console.error("Fetch Hatası:", e);
        } finally {
            // Geçiş hızı için ufak delay
            setTimeout(() => setLoading(false), 400);
        }
    };

    useEffect(() => {
        loadData();
    }, [activeCity]);

    return (
        <div className="layout-root">
            {/* Sol taraf: Seçenekler */}
            <aside className="nav-panel">
                <div className="nav-header">
                    <div className="brand-icon">🌙</div>
                    <div className="brand-meta">
                        <h2>İMSAKİYE</h2>
                        <small>Ramazan 2026</small>
                    </div>
                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Şehir ara..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="city-list">
                    {filteredList.map((city) => (
                        <button
                            key={city.id}
                            className={activeCity.id === city.id ? "city-item active" : "city-item"}
                            onClick={() => setActiveCity(city)}
                        >
                            <span className="city-name">{city.ad}</span>
                            {activeCity.id === city.id && <div className="indicator" />}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Sağ taraf: Ana ekran */}
            <main className="main-content">
                <header className="content-header">
                    <div className="city-title">
                        <h1>{activeCity.ad} <span>Vakitleri</span></h1>
                        <p>2026 Takvimi (Hicri 1447)</p>
                    </div>
                    <div className="time-badge">
                        Gaziantep • {new Date().toLocaleDateString('tr-TR')}
                    </div>
                </header>

                <div className="scroll-wrapper">
                    {loading ? (
                        <div className="loader-container">
                            <div className="circle-spinner"></div>
                            <p>Yükleniyor...</p>
                        </div>
                    ) : (
                        <div className="bento-grid">
                            {data
                                .filter(i => i.HicriTarihUzun.includes("Ramazan"))
                                .map((item, idx) => (
                                    <div key={idx} className="imsakiye-card">
                                        <div className="card-top">
                                            <span className="day-label">{idx + 1}. GÜN</span>
                                            <span className="date-text">{item.MiladiTarihKisa}</span>
                                        </div>

                                        <div className="vakit-group">
                                            <div className="vakit-row sahur-bg">
                                                <label>İMSAK</label>
                                                <strong>{item.Imsak}</strong>
                                            </div>
                                            <div className="vakit-row iftar-bg">
                                                <label>İFTAR</label>
                                                <strong>{item.Aksam}</strong>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            {item.HicriTarihUzun.split(" ")[0]} Ramazan
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;