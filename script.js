// JavaScript feature 1: Show a welcome message.
document.getElementById("welcomeButton").addEventListener("click", function () {
  document.getElementById("welcomeMessage").textContent =
    "Hello! Thank you for visiting Britney's portfolio.";
});

// JavaScript feature 2: Show a contact message.
document.getElementById("contactButton").addEventListener("click", function () {
  document.getElementById("contactMessage").textContent =
    "You can reach me at 98373@siswa.unimas.my.";
});

// JavaScript feature 3: Display the current year automatically.
document.getElementById("year").textContent = new Date().getFullYear();
