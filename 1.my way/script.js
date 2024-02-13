let $ = document;
let userInput = $.querySelector("#userInput");
let passInput = $.querySelector("#passInput");
let lefteye = $.querySelector("#lefteye");
let righteye = $.querySelector("#righteye");

userInput.addEventListener("focus", () => {
  righteye.style.left = "165px";
  righteye.style.top = "84px";
  lefteye.style.left = "100px";
  lefteye.style.top = "84px";
});
userInput.addEventListener("keydown", (e) => {
  if (e.key !== "Backspace") {
    if (userInput.value.length < 17) {
      righteye.style.left = parseInt(righteye.style.left) + 1 + "px";
      lefteye.style.left = parseInt(lefteye.style.left) + 1 + "px";
    }
  }else{
    if (userInput.value.length > 0) {
        righteye.style.left = parseInt(righteye.style.left) - 1 + "px";
        lefteye.style.left = parseInt(lefteye.style.left) - 1 + "px";
    }
  }
});
passInput.addEventListener("focus", () => {
  righteye.style.left = "166px";
  righteye.style.top = "60px";
  lefteye.style.left = "120px";
  lefteye.style.top = "60px";
});
function defaultEyePosition() {
  righteye.style.left = "174px";
  righteye.style.top = "75px";
  lefteye.style.left = "110px";
  lefteye.style.top = "75px";
}
passInput.addEventListener("blur", defaultEyePosition);
userInput.addEventListener("blur", defaultEyePosition);
