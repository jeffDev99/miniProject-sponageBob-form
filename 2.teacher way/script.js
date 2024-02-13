let $ = document;
let userInput = $.querySelector("#userInput");
let passInput = $.querySelector("#passInput");
let lefteye = $.querySelector("#lefteye");
let righteye = $.querySelector("#righteye");

let leftEyeTop = 75;
let leftEyeLeft = 110;
let lefteyePaddingLeft = 0;
let lefteyePaddingTop = 0;

let rightEyeTop = 75;
let rightEyeLeft = 175;
let righteyePaddingLeft = 0;
let righteyePaddingTop = 0;
const userInputFocus = function () {
  let eyePosition = setInterval(() => {
    if (lefteyePaddingTop === 11) {
      clearInterval(eyePosition);
    }
    lefteye.style.paddingTop = lefteyePaddingTop + "px";
    lefteye.style.left = leftEyeLeft + "px";
    righteye.style.paddingTop = righteyePaddingTop + "px";
    righteye.style.left = rightEyeLeft + "px";

    lefteyePaddingTop++;
    leftEyeLeft--;
    righteyePaddingTop++;
    rightEyeLeft--;
  }, 5);
};
const userInputKeyPress = function (e) {
  if (lefteyePaddingLeft > 20) {
    return false;
  }else{
    if (e.keyCode === 8) {
      lefteyePaddingLeft--;
      righteyePaddingLeft--;
    } else {
      lefteyePaddingLeft++;
      righteyePaddingLeft++;
    }
  
    lefteye.style.paddingLeft = lefteyePaddingLeft + "px";
    righteye.style.paddingLeft = righteyePaddingLeft + "px";
  }

};
const userInputBlur = function () {
  let eyePosition = setInterval(() => {
    if (lefteyePaddingTop === 0) {
      clearInterval(eyePosition);
    }
    lefteye.style.paddingTop = lefteyePaddingTop + "px";
    lefteye.style.left = leftEyeLeft + "px";
    righteye.style.paddingTop = righteyePaddingTop + "px";
    righteye.style.left = rightEyeLeft + "px";

    lefteyePaddingTop--;
    leftEyeLeft++;
    righteyePaddingTop--;
    rightEyeLeft++;
  }, 5);
};
const passInputFocus = function () {
  let eyePosition = setInterval(() => {
    if (leftEyeTop === 60) {
      clearInterval(eyePosition);
    }
    lefteye.style.left = leftEyeLeft + "px";
    lefteye.style.top = leftEyeTop + "px";
    righteye.style.left = rightEyeLeft + "px";
    righteye.style.top = rightEyeTop + "px";
    leftEyeLeft++;
    leftEyeTop--;
    rightEyeLeft--;
    rightEyeTop--;
  }, 5);
};
const passInputBlur = function () {
  let eyePosition = setInterval(() => {
    if (leftEyeTop === 75) {
      clearInterval(eyePosition);
    }
    lefteye.style.left = leftEyeLeft + "px";
    lefteye.style.top = leftEyeTop + "px";
    righteye.style.left = rightEyeLeft + "px";
    righteye.style.top = rightEyeTop + "px";
    leftEyeLeft--;
    leftEyeTop++;
    rightEyeLeft++;
    rightEyeTop++;
  }, 5);
};

userInput.addEventListener("focus", userInputFocus);
userInput.addEventListener("keydown", userInputKeyPress);
userInput.addEventListener("blur", userInputBlur);
passInput.addEventListener("focus", passInputFocus);
passInput.addEventListener("blur", passInputBlur);
