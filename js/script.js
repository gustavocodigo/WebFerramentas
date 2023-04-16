function updateCopyRightDate() {
  document.getElementById("cpyear").innerText=(new Date).getFullYear()
}


addEventListener("DOMContentLoaded", (event) => {
  updateCopyRightDate()
});