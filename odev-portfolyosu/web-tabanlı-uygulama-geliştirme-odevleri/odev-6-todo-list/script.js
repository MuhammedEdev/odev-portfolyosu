/**
 * Pro-Task Görev Yönetim Sistemi
 * Özellikler: Dinamik İstatistik, Enter Desteği, Akıllı Öncelik Atama
 */

// Element Seçicileri
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const totalSpan = document.querySelector("#toplam-sayisi");
const completedSpan = document.querySelector("#tamamlanan-sayisi");
const dateDisplay = document.querySelector("#tarih-ozeti");

// Tarihi Güncelle
const options = { weekday: 'long', month: 'long', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('tr-TR', options);

// İstatistikleri Güncelleme Fonksiyonu
function updateStats() {
    const total = document.querySelectorAll("li").length;
    const completed = document.querySelectorAll("li.completed").length;
    totalSpan.innerText = total;
    completedSpan.innerText = completed;
}

// Ana Görev Ekleme Fonksiyonu
function addTask() {
    const taskValue = todoInput.value.trim();

    if (taskValue === "") {
        todoInput.placeholder = "Hata: Bir şey yazmalısın!";
        setTimeout(() => todoInput.placeholder = "Yeni bir görev ekle...", 2000);
        return;
    }

    // Li Oluşturma
    const li = document.createElement("li");
    
    // Akıllı Öncelik Kontrolü
    if (taskValue.toLowerCase().includes("acil")) {
        li.classList.add("priority");
    }

    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <div class="actions">
            <i class="fa-solid fa-trash delete-btn"></i>
        </div>
    `;

    // Listeye Ekle (En üste ekle - modern yaklaşım)
    todoList.prepend(li);
    
    // Verileri Sıfırla
    todoInput.value = "";
    updateStats();
}

// Olay Dinleyicileri (Event Listeners)
addBtn.addEventListener("click", addTask);

// Enter Tuşu Desteği
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Liste Etkileşimleri (Delegation)
todoList.addEventListener("click", (e) => {
    const target = e.target;

    // Silme İşlemi
    if (target.classList.contains("delete-btn")) {
        target.closest("li").classList.add("slide-out"); // Silme animasyonu eklenebilir
        target.closest("li").remove();
    } 
    // Tamamlama İşlemi
    else if (target.tagName === "LI" || target.classList.contains("task-text")) {
        target.closest("li").classList.toggle("completed");
    }
    
    updateStats();
});

// Başlangıçta istatistikleri sıfırla
updateStats();