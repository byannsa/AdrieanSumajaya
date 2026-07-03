const slider = document.getElementById("logoSlider");
const track = document.getElementById("logoTrack");

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuBtn.querySelector("span");

// Toggle menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  menuIcon.textContent = mobileMenu.classList.contains("open")
    ? "close"
    : "menu";
});

// Tutup menu setelah klik link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuIcon.textContent = "menu";
  });
});

// ===============================
// ACTIVE NAVBAR
// ===============================

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// LOGO SLIDER
// ===============================

track.innerHTML += track.innerHTML;

let speed = 0.8;
let isDown = false;
let isDragging = false;

let startX;
let scrollLeft;

function autoScroll() {
  if (!isDragging) {
    slider.scrollLeft += speed;

    if (slider.scrollLeft >= track.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }

  requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll);

// ===============================
// DRAG DESKTOP
// ===============================

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  isDragging = true;

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

window.addEventListener("mouseup", () => {
  isDown = false;

  setTimeout(() => {
    isDragging = false;
  }, 100);
});

window.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const walk = e.pageX - startX;
  slider.scrollLeft = scrollLeft - walk;
});

// ===============================
// TOUCH MOBILE
// ===============================

slider.addEventListener(
  "touchstart",
  (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  },
  { passive: true },
);

slider.addEventListener(
  "touchmove",
  (e) => {
    const walk = e.touches[0].pageX - startX;
    slider.scrollLeft = scrollLeft - walk;
  },
  { passive: true },
);

slider.addEventListener("touchend", () => {
  setTimeout(() => {
    isDragging = false;
  }, 100);
});

// Infinite Loop

slider.addEventListener("scroll", () => {
  const half = track.scrollWidth / 2;

  if (slider.scrollLeft >= half) slider.scrollLeft -= half;

  if (slider.scrollLeft <= 0) slider.scrollLeft += half;
});
