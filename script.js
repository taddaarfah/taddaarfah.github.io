// =========================
// TADDA — Terminal/Cyber JS
// =========================

const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// ===== Navbar scroll: style + hide/show
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y > 10) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  if (y > lastScrollY && y > 120) {
    navbar.style.transform = "translateY(-110%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollY = y;

  setActiveLink();
});

// ===== Mobile menu
hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach(a => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===== Reveal animation
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

// ===== Active link highlight
const sections = document.querySelectorAll("section[id]");
function setActiveLink(){
  const scrollPos = window.scrollY + 120;
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

// ===== Gallery modal (keep your existing IDs)
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

// =========================
// Typing Effect for .profession
// =========================
const professionEl = document.querySelector(".profession");
if (professionEl) {
  const originalText = (professionEl.textContent || "").trim();

  // phrases for "programmer vibes" (still consistent with your role)
  const phrases = [
    originalText || "Web Developer",
    "Laravel / PHP Developer",
    "Full-Stack Web Developer",
    "Building scalable web apps",
    "Clean code • Fast delivery"
  ];

  // Create caret
  const caret = document.createElement("span");
  caret.className = "type-caret";
  caret.textContent = "█";

  let pIndex = 0;
  let cIndex = 0;
  let deleting = false;

  // Reset content to typing area
  professionEl.textContent = "";
  professionEl.appendChild(document.createTextNode(""));
  professionEl.appendChild(caret);

  function setText(t){
    professionEl.childNodes[0].textContent = t;
  }

  function tick(){
    const current = phrases[pIndex];
    const shown = professionEl.childNodes[0].textContent;

    // typing
    if (!deleting) {
      cIndex++;
      setText(current.slice(0, cIndex));

      if (cIndex >= current.length) {
        deleting = true;
        setTimeout(tick, 1200); // pause when full
        return;
      }
      setTimeout(tick, 45);
      return;
    }

    // deleting
    cIndex--;
    setText(current.slice(0, cIndex));

    if (cIndex <= 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
      setTimeout(tick, 260);
      return;
    }

    setTimeout(tick, 26);
  }

  // start after a short delay
  setTimeout(tick, 450);
}
