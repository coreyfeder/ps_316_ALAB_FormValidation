console.log("loading src/index.js");

const displayError = (message) => {
    const errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.textContent = message;
    errorDisplay.style.display = "initial";
};
