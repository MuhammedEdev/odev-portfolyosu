/**
 * Not Hesaplama Mantığı
 * Yazılımcı Notu: Vize %40 - Final %60 üzerinden hesaplanır.
 */

function hesapla() {
    // Inputlardan verileri çekiyoruz
    const vizeGirdisi = document.getElementById('vize').value;
    const finalGirdisi = document.getElementById('final').value;

    // Arayüz elementlerini yakalıyoruz
    const panel = document.getElementById('sonuc-paneli');
    const durumYazisi = document.getElementById('durum-metni');
    const puanYazisi = document.getElementById('puan-metni');
    const progressBar = document.getElementById('bar');

    // Boş alan kontrolü
    if (vizeGirdisi === "" || finalGirdisi === "") {
        alert("Lütfen tüm not alanlarını doldurun.");
        return;
    }

    const vize = parseFloat(vizeGirdisi);
    const final = parseFloat(finalGirdisi);

    // Mantıksal aralık kontrolü
    if (vize < 0 || vize > 100 || final < 0 || final > 100) {
        alert("Notlar 0 ile 100 arasında olmalıdır.");
        return;
    }

    // Ağırlıklı ortalama hesabı
    const ortalama = (vize * 0.4) + (final * 0.6);

    // Paneli göster ve değerleri yaz
    panel.style.display = "block";
    puanYazisi.innerText = ortalama.toFixed(1);

    // Progress bar animasyonunu başlat
    setTimeout(() => {
        progressBar.style.width = ortalama + "%";
    }, 50);

    // Geçti - Kaldı analizi (Sınır 50)
    if (ortalama >= 50) {
        durumYazisi.innerText = "GEÇTİ";
        durumYazisi.className = "text-success";
        progressBar.className = "progress-bar bg-success";
    } else {
        durumYazisi.innerText = "KALDI";
        durumYazisi.className = "text-danger";
        progressBar.className = "progress-bar bg-danger";
    }
}