const video = document.getElementById("video");
const chat = document.getElementById("chat");

const viewersEl = document.getElementById("viewers");
const likesEl = document.getElementById("likes");
const laughsEl = document.getElementById("laughs");
const wowsEl = document.getElementById("wows");

// Access camera
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert("Camera access denied or not supported on this device.");
  });

// Fake data
const names = ["Bornok", "LeBron", "DU30", "Malupiton", "iShowSpeed", "MrBeast"];
const comments = [
  "LOL",
  "Mamaw",
  "Pansinin mo naman ako idol",
  "This is awesome 🔥",
  "Hi from Philippines",
  "Huwaw",
  "HAHAHA",
  "ANG GALING TANGINA",
  "Shout out po",
  "Pogi",
  "Nganong walay security guard ang police station?",
  "Taga san ka?"
];

const reactions = ["like", "laugh", "wow"];

let viewers = 10;
let likes = 0;
let laughs = 0;
let wows = 0;

// Floating reaction animation
function spawnReaction(emoji) {
  const el = document.createElement("div");
  el.className = "floating";
  el.textContent = emoji;

  const videoSection = document.querySelector(".video-section");
  el.style.right = Math.random() * 40 + "px"; // random horizontal position

  videoSection.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 2000);
}

// Generate fake viewers (more realistic)
setInterval(() => {
  viewers += Math.floor(Math.random() * 7) - 2;
  if (viewers < 0) viewers = 0;
  viewersEl.textContent = viewers;
}, 2000);

// Generate fake chat
setInterval(() => {
  const name = names[Math.floor(Math.random() * names.length)];
  const comment = comments[Math.floor(Math.random() * comments.length)];

  const msg = document.createElement("div");
  msg.className = "chat-message";
  msg.textContent = `${name}: ${comment}`;

  chat.appendChild(msg);

  // Limit chat messages (prevents lag)
  if (chat.children.length > 30) {
    chat.removeChild(chat.firstChild);
  }
}, 1500);

// Generate reactions + floating emojis
setInterval(() => {
  const type = reactions[Math.floor(Math.random() * reactions.length)];

  if (type === "like") {
    likes++;
    likesEl.textContent = likes;
    spawnReaction("❤️");
  }

  if (type === "laugh") {
    laughs++;
    laughsEl.textContent = laughs;
    spawnReaction("😂");
  }

  if (type === "wow") {
    wows++;
    wowsEl.textContent = wows;
    spawnReaction("😮");
  }
}, 1000);
