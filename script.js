let cvs = document.getElementById("cvs");
let STATE = "RUNNING";
let i = null;
let slider = null;
let speed = null;
slider = document.getElementById("slider").value;
speed = Math.floor(60000 / slider);

function submit() {
  let textarea = document.getElementById("ta");
  let text = textarea.value;
  STATE = "RUNNING";
  words = [];
  words = text.split(" ");
  write();
}

async function write() {
  let cvs = document.getElementById("cvs");
  let ctx = cvs.getContext("2d");
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
sleep();
function getWPM() {
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
