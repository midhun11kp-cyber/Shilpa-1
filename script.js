const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);
noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;
});
document.getElementById("yes").addEventListener("click", () => {
document.body.innerHTML = `
<div style="text-align:center;color:white;">
<h1>🥰 Yayyy! She said YES! 💖</h1>
<p>Happy Valentine’s Day 🌹</p>
</div>`;
});
