const slider = document.getElementById("logoSlider");
const track = document.getElementById("logoTrack");

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// ====================
// MOBILE MENU
// ====================

// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuBtn.querySelector("span");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");

  if (isOpen) {
    // Tutup
    mobileMenu.classList.remove("open");

    mobileMenu.style.maxHeight = "0px";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transform = "translateY(-12px)";

    menuIcon.textContent = "menu";
  } else {
    // Buka
    mobileMenu.classList.add("open");

    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    mobileMenu.style.opacity = "1";
    mobileMenu.style.transform = "translateY(0)";

    menuIcon.textContent = "close";
  }
});

// Klik menu -> otomatis tutup
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");

    mobileMenu.style.maxHeight = "0px";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transform = "translateY(-12px)";

    menuIcon.textContent = "menu";
  });
});

// Tutup menu setelah klik link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("max-h-screen", "opacity-100", "translate-y-0");

    mobileMenu.classList.add("max-h-0", "opacity-0", "-translate-y-3");

    menuIcon.textContent = "menu";
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop) {
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

// ======================
// DUPLIKASI LOGO
// ======================

track.innerHTML += track.innerHTML;

// ======================

let speed = 0.8;
let isDown = false;
let isDragging = false;

let startX;
let scrollLeft;

// ======================
// AUTO SCROLL
// ======================

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

// ======================
// DESKTOP DRAG
// ======================

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

// ======================
// TOUCH
// ======================

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

// ======================
// LOOP MANUAL
// ======================

slider.addEventListener("scroll", () => {
  const half = track.scrollWidth / 2;

  if (slider.scrollLeft >= half) {
    slider.scrollLeft -= half;
  }

  if (slider.scrollLeft <= 0) {
    slider.scrollLeft += half;
  }
});
