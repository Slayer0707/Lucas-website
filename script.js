const btn = document.getElementById("Btn1");
const msg = document.getElementById("homep");

if (btn && msg) {
  btn.addEventListener("click", () => {
    translate();
    csschange();
  });
}

function translate() {
  const cnText = msg.dataset.cn;
  if (cnText) {
    msg.textContent = cnText;
  }
}

function csschange() {
  msg.style.color = "#990000";
  msg.style.background = "#FFCC00";
}

