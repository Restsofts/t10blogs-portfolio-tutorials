document.addEventListener("DOMContentLoaded", function () {
  // Dynamic Greeting
  const hours = new Date().getHours();
  const greeting = document.querySelector("#hero h1");
  if (hours < 12) {
    greeting.textContent = "صباح الخير! مرحبًا بكم في موقعي الشخصي";
  } else if (hours < 18) {
    greeting.textContent = "مساء الخير! مرحبًا بكم في موقعي الشخصي";
  } else {
    greeting.textContent = "مساء الخير! مرحبًا بكم في موقعي الشخصي";
  }

  // Form Handling
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    form.reset();
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
