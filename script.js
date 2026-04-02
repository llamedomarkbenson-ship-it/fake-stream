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
    alert("Camera access denied!");
  });

// Fake data
const names = ["Alex", "Jordan", "Chris", "Sam", "Taylor", "Jamie"];
const comments = [
  "LOL 😂",
  "You're amazing!",
  "First time here!",
  "This is awesome 🔥",
  "Hi from Philippines 🇵🇭",
  "Keep going!",
  "HAHAHA"
];

const reactions = ["like", "laugh", "wow"];

let viewers = 10;
let likes = 0;
let laughs = 0;
let wows = 0;

// Generate fake viewers
setInterval(() => {
  viewers += Math.floor(Math.random() * 5);
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
  chat.scrollTop = chat.scrollHeight;
}, 1500);

// Generate reactions
setInterval(() => {
  const type = reactions[Math.floor(Math.random() * reactions.length)];

  if (type === "like") {
    likes++;
    likesEl.textContent = likes;
  }
  if (type === "laugh") {
    laughs++;
    laughsEl.textContent = laughs;
  }
  if (type === "wow") {
    wows++;
    wowsEl.textContent = wows;
  }
}, 1000);
