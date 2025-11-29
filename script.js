// Mobile navbar toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Close nav when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

// Smooth scroll for internal links (fallback if browser doesn't support CSS smooth)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Waitlist form (front-end only)
const waitlistForm = document.getElementById("waitlistForm");
const formMessage = document.getElementById("formMessage");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      formMessage.textContent = "Please fill in at least your name and email.";
      formMessage.style.color = "#ff5c7a";
      return;
    }

    // Here you would normally send data to your backend / Firebase
    // For now we just show a confirmation message.
    formMessage.textContent =
      "Thank you! You’re on the UnProf waitlist. We’ll contact you soon.";
    formMessage.style.color = "#00f5d4";
    waitlistForm.reset();
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
