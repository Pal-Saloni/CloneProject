const languageDropdown = document.getElementById("language-btn")
const faqListItem = document.querySelectorAll(".inner-container ul li")

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show")
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})

document.getElementById('signup-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
  
  document.getElementById('signin-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
  