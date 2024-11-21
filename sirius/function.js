
let text = "Tune";  // The word you want to type out
const typingElement = document.getElementById("typingText");
let currentIndex = 0;

function typeText() {
  if (currentIndex < text.length) {
    typingElement.textContent += text[currentIndex];
    currentIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      currentIndex = 0;
      changeName();
      typeText();
    }, 3000);
  }
}

function changeName() {
  if (text === "Tune") {
    text = "Build";
  } else if (text === "Build") {
    text = "Integrate"
  } else {
    text = "Tune"
  }
}

typeText();


function fixedLoad() {
  document.getElementById("fixed-load").style.display = "block";
}