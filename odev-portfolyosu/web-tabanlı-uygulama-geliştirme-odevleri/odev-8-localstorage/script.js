// --- TEMA YÖNETİMİ ---
const body = document.body;
const themeBtn = document.getElementById("theme-toggle");

// Sayfa açıldığında hafızayı kontrol et
const savedTheme = localStorage.getItem("muhammed_theme");
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    updateThemeIcon(true);
}

function toggleTheme() {
    const isDark = body.classList.toggle("dark-theme");
    localStorage.setItem("muhammed_theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// --- LİSTE YÖNETİMİ ---
const input = document.getElementById("item-input");
const listContainer = document.getElementById("item-list");

// Hafızadaki veriyi çek (Parse et), yoksa boş dizi başlat
let items = JSON.parse(localStorage.getItem("muhammed_shopping_list")) || [];

function renderList() {
    listContainer.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item}</span>
            <i class="fa-solid fa-circle-xmark delete-btn" onclick="removeItem(${index})"></i>
        `;
        listContainer.appendChild(li);
    });
}

function addItem() {
    const value = input.value.trim();
    if (value) {
        items.push(value);
        syncStorage();
        input.value = "";
    } else {
        alert("Lütfen bir ürün ismi girin!");
    }
}

function removeItem(index) {
    items.splice(index, 1);
    syncStorage();
}

function clearList() {
    if (items.length > 0 && confirm("Tüm listeyi temizlemek istediğine emin misin?")) {
        items = [];
        syncStorage();
    }
}

function syncStorage() {
    // Veriyi Stringify (Paketleme) yaparak Local Storage'a at
    localStorage.setItem("muhammed_shopping_list", JSON.stringify(items));
    renderList();
}

// Enter tuşuyla ekleme yapabilmek için
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
});

// Başlangıçta listeyi ekrana bas
renderList();