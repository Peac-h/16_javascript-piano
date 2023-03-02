"use strict";

const keys = document.querySelectorAll(".key");
const letters = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];

keys.forEach((key) =>
  key.addEventListener("click", function () {
    playKey(key);
  })
);

document.addEventListener("keydown", function (e) {
  if (e.repeat) return;
  if (!keys[letters.indexOf(e.key)]) return;
  playKey(keys[letters.indexOf(e.key)]);
});

function playKey(key) {
  const note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  note.play();

  if (key.classList.contains("white")) {
    key.classList.add("active--white");
    setTimeout(function () {
      key.classList.remove("active--white");
    }, 200);
  } else if (key.classList.contains("black")) {
    key.classList.add("active--black");
    setTimeout(function () {
      key.classList.remove("active--black");
    }, 200);
  }
}

///////////////////////////////////////////////////////////////
// here goes the alternative way of implementing the same logic (v2)
// this way there's no need to include notes in html file

// v2
// const keys = document.querySelectorAll(".key");

// keys.forEach((key) =>
//   key.addEventListener("click", function () {
//     playKey(key.textContent);
//   })
// );

// document.addEventListener("keydown", function (e) {
//   if (e.repeat) return;
//   playKey(e.key);
// });

// function playKey(key) {
//   switch (key) {
//     case "a":
//       const a = new Audio("notes/do-stretched.wav");
//       a.play();
//       break;
//     case "w":
//       const w = new Audio("notes/Db.mp3");
//       w.play();
//       break;
//     case "s":
//       const s = new Audio("notes/re-stretched.wav");
//       s.play();
//       break;
//     case "e":
//       const e = new Audio("notes/Eb.mp3");
//       e.play();
//       break;
//     case "d":
//       const d = new Audio("notes/mi-stretched.wav");
//       d.play();
//       break;
//     case "f":
//       const f = new Audio("notes/fa-stretched.wav");
//       f.play();
//       break;
//     case "t":
//       const t = new Audio("notes/Gb.mp3");
//       t.play();
//       break;
//     case "g":
//       const g = new Audio("notes/sol-stretched.wav");
//       g.play();
//       break;
//     case "y":
//       const y = new Audio("notes/Ab.mp3");
//       y.play();
//       break;
//     case "h":
//       const h = new Audio("notes/la-stretched.wav");
//       h.play();
//       break;
//     case "u":
//       const u = new Audio("notes/Bb.mp3");
//       u.play();
//       break;
//     case "j":
//       const j = new Audio("notes/si-stretched.wav");
//       j.play();
//       break;
//     default:
//       console.log("oops");
//   }
// }
