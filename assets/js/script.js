// Email JS Start //

// All vatiables
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const errorDiv = document.getElementById("error-div");

  // Variable value

  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messagelValue = messageField.value;

  const templateParams = {
    nameValue: nameValue,

    emailValue: emailValue,

    messagelValue: messagelValue,
  };

  if (nameValue && emailValue && messagelValue) {
    console.log(nameValue, emailValue, messagelValue);
    errorDiv.innerHTML = `<p class="text-white">Your message is send successfully...</p>`;
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";

    emailjs.send(
      "service_portfolio",
      "template_wb1yrvj",
      templateParams,
      "QVHtjkDXeb1h_XzvC"
    );
  } else {
    errorDiv.innerHTML = `<p class="text-white m-0">Please fill all required field !</p>`;
  }
});
// Email JS end //


// Preloader//
window.onload = function () {
  const preloaderArea = document.getElementById("prelodder-area");
  preloaderArea.className = "page-loaded";

  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 500);
};