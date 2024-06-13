
 document.querySelector("#hireMe").addEventListener("submit", (event) => {
    
    event.target.innerHTML = `<span>Please wait this might take a few minutes</span> <div class="loader"></div> `
    ;
})
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.navlist');

  hamburger.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.toggle('active');
    });
  });
});

