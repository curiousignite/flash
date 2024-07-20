let cvs = document.getElementById("cvs");
var STATE = "";
var i = null;
var slider = null;
var speed = null;

function submit() {
  if (STATE === "" || STATE === "STOPPED") {
    slider = document.getElementById("slider").value;
    speed = Math.floor(60000 / slider);
    console.log("worked");
    var textarea = document.getElementById("ta");
    var text = textarea.value;
    STATE = "RUNNING";
    words = [];
    words = text.split(" ");
    write();
  }
}
async function write() {
  var cvs = document.getElementById("cvs");
  var ctx = cvs.getContext("2d");
  ctx.textAlign = "center";
  ctx.font = "90px Times New Roman";
  for (i; i < words.length; i++) {
    if (STATE == "RUNNING") {
      ctx.fillText(words[i], cvs.width / 2, (cvs.height / 10) * 7, cvs.width);
      console.log(speed);
      await sleep(speed);
      console.log(speed);
      ctx.clearRect(0, 0, cvs.width, cvs.height);
    } else if (STATE == "STOPPED") {
      ctx.fillText(words[i], cvs.width / 2, (cvs.height / 10) * 7, cvs.width);
      console.log(speed);
      break;
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stop() {
  STATE = "STOPPED";
}
function getWPM() {
  slider = document.getElementById("slider").value;
  speed = Math.floor(60000 / slider);
  document.getElementById("wpm").value =
    document.getElementById("slider").value;
}
function setWPM() {
  document.getElementById("slider").value =
    document.getElementById("wpm").value;
}
async function loadFile(file) {
  let text = await file.text();
  document.getElementById("ta").textContent = text;
}
//TODO: Add custom colour scheme.

document.addEventListener("keypress", function (e) {
  if (e.keyCode === 32) {
    if (STATE === "RUNNING") {
      STATE = "STOPPED";
    }
  }
});
