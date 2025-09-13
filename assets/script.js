document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#hambtn');
  const drawer = document.querySelector('#drawer');
  if (btn && drawer) {
    btn.addEventListener('click', () => drawer.classList.toggle('open'));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ✅ Formspree AJAX handler
  
});


const form = document.querySelector("form");
const successMsg = document.getElementById("formSuccess");
if (form && successMsg) {
form.addEventListener("submit", async (e) => {
e.preventDefault();
const data = new FormData(form);
try {
const response = await fetch(form.action, {
method: form.method,
body: data,
headers: { 'Accept': 'application/json' }
});
if (response.ok) {
form.reset();
successMsg.classList.add('show');
setTimeout(() => {
successMsg.classList.remove('show');
}, 4000);
} else {
alert("There was an issue submitting your form. Please try again.");
}
} catch (error) {
console.error("Form submission error:", error);
alert("Error submitting form. Check your connection.");
}
});
}
