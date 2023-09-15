const setCharsLengthInput = document.querySelector("#passwordLength");
const generatedResult = document.querySelector("#generatedResult");

const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");

const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  clearResult();
  let convertedInputLength = parseInt(setCharsLengthInput.value);
  if (convertedInputLength > 5) {
    for (let i = convertedInputLength; i > 0; --i) {
      generatedResult.textContent +=
        characters[Math.floor(Math.random() * characters.length)];
    }
  } else {
    alert(
      "Minimum 6 characters required.\n\nU want a strong password, right ?"
    );
  }
  console.log(generatedResult.textContent);
}

copyBtn.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  if (generatedResult.textContent != "") {
    navigator.clipboard.writeText(generatedResult.textContent);
    copyBtn.textContent = "Copied!";
    copyBtn.classList.add("copied-animation");
    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove("copied-animation");
    }, 5000);
  }
}

function clearResult() {
  generatedResult.textContent = undefined;
}
