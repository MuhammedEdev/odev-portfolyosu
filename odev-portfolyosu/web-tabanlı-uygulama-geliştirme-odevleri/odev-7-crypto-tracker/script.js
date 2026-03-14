const syncBtn = document.getElementById('sync-trigger');
const feed = document.getElementById('coin-feed');
const navBtns = document.querySelectorAll('.nav-btn');
const panels = document.querySelectorAll('.view-panel');
const titleSpan = document.querySelector('#main-title span');

// Navigation
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        navBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
        titleSpan.innerText = target.charAt(0).toUpperCase() + target.slice(1);
        lucide.createIcons();
    });
});

// Fetch API
async function refreshData() {
    const icon = syncBtn.querySelector('i');
    icon.classList.add('spin');
    
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
        const data = await res.json();
        
        const assets = [
            {id:'bitcoin', name:'Bitcoin', sym:'BTC'},
            {id:'ethereum', name:'Ethereum', sym:'ETH'},
            {id:'dogecoin', name:'Dogecoin', sym:'DOGE'}
        ];

        feed.innerHTML = assets.map(a => `
            <article class="coin-box">
                <small style="color:var(--muted)">${a.sym}/USD</small>
                <h3>${a.name}</h3>
                <p class="price-val">$${data[a.id].usd.toLocaleString()}</p>
            </article>
        `).join('');
    } catch (e) {
        feed.innerHTML = `<p>Check Connection...</p>`;
    } finally {
        setTimeout(() => icon.classList.remove('spin'), 600);
        lucide.createIcons();
    }
}

// Clock
setInterval(() => {
    document.getElementById('clock-display').innerText = new Date().toLocaleTimeString();
}, 1000);

syncBtn.addEventListener('click', refreshData);
document.addEventListener('DOMContentLoaded', () => { refreshData(); lucide.createIcons(); });