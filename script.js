const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const setActiveSection = () => {
  const offset = window.innerHeight * 0.22;
  let activeId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom >= offset) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
  });
};

document.addEventListener("scroll", setActiveSection, { passive: true });
window.addEventListener("load", setActiveSection);
window.addEventListener("resize", setActiveSection);

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const paperThumbs = Array.from(document.querySelectorAll(".paper-thumb"));

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
};

if (lightbox && lightboxImage) {
  paperThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const fullsrc = thumb.getAttribute("data-fullsrc") || thumb.getAttribute("src");
      lightboxImage.src = fullsrc || "";
      lightboxImage.alt = thumb.alt;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
