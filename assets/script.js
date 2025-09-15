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
// Testimonial slider
const track = document.querySelector(".testimonial-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".slider-btn.next");
const prevBtn = document.querySelector(".slider-btn.prev");
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex = 0;

// Create dots
slides.forEach((_, idx) => {
  const dot = document.createElement("span");
  if (idx === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(idx));
  dotsContainer.appendChild(dot);
});
const dots = Array.from(dotsContainer.children);

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Arrow buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// Auto-slide every 5s
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 5000);

// Optional: swipe support for touch devices
let startX = 0;
track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
track.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prevBtn.click();
  else if (startX - endX > 50) nextBtn.click();
});
