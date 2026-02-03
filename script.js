const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button → slideshow
yesBtn.addEventListener("click", () => {

  const images = [
    "WhatsApp Image 2026-02-03 at 11.40.07 (3).jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.07 (2).jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.07 (1).jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.07 AM.jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.06 (2).jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.06 (1).jpeg",
    "WhatsApp Image 2026-02-03 at 11.40.06 AM.jpeg"
  ];

  let index = 0;

  document.body.innerHTML = `
    <div style="
      height:100vh;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    ">
      <h1 style="color:white;margin-bottom:20px;">
        💖 Our Memories 💖
      </h1>
      <img id="slideImg" src="${images[0]}" style="
        max-width:90%;
        max-height:70%;
        border-radius:20px;
        box-shadow:0 10px 30px rgba(0,0,0,0.4);
        transition: opacity 0.8s;
      ">
    </div>
  `;

  setInterval(() => {
    index = (index + 1) % images.length;
    const img = document.getElementById("slideImg");
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = images[index];
      img.style.opacity = 1;
    }, 500);
  }, 2500);

});

