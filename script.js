function showMessage() {
  alert("Welcome to my website!");
}

var yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
