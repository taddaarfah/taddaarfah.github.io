// =========================
// TADDA — Elegant Dev Portfolio JS
// =========================

const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Sticky nav style on scroll + hide on scroll down
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // scrolled style
  if (y > 10) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  // hide / show navbar
  if (y > lastScrollY && y > 120) {
    navbar.style.transform = "translateY(-110%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollY = y;

  // active link highlight
  setActiveLink();
});

// Mobile menu
hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when clicking link (mobile)
navLinks.forEach(a => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth reveal animation
const revealEls = document.querySelectorAll(
  ".hero-image, .hero-content, .section h2, .section p, .skill-item, .education-item, .project-card, .gallery-item, .contact-info, .social-link"
);

revealEls.forEach(el => el.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Active link based on section
const sections = document.querySelectorAll("section[id]");
function setActiveLink(){
  const scrollPos = window.scrollY + 120; // offset for fixed navbar
  let currentId = "home";
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + h) currentId = sec.id;
  });

  navLinks.forEach(a => {
    const href = a.getAttribute("href") || "";
    const id = href.replace("#", "");
    a.classList.toggle("active", id === currentId);
  });
}
setActiveLink();

// Gallery modal (keep your existing IDs)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "Gallery";
    document.body.style.overflow = "hidden";
  });
});

function closeModal(){
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

closeBtn?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});
