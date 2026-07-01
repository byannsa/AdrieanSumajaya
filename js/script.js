const slider = document.getElementById("logoSlider");
const track = document.getElementById("logoTrack");

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
