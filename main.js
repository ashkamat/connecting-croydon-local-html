// debug screen width
let screentext = document.querySelector(".screenWidth");

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  screentext.innerHTML = width;
});

let preLoader = document.querySelector(".preLoader");

window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

// set

gsap.set(".mobile-menu_panel", {

  xPercent:100,

});

let openBtn = document.querySelector("#openBtn");
let closeBtn = document.querySelector("#closeBtn");
let menu = document.querySelector("#mobileMenu");

openBtn.addEventListener("click", hamburgerClicked);
closeBtn.addEventListener("click", closedBtnClicked);

function hamburgerClicked() {
  gsap.to(".mobile-menu_panel", {
    xPercent: 0,
  });

  // ✅ ARIA updates
  openBtn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");

  // move focus into menu
  // closeBtn.focus();

  document.querySelector("#mobileMenu").classList.add("active");

  console.log("hamburger clicked");
}

function closedBtnClicked() {
  gsap.to(".mobile-menu_panel", {
    xPercent: 100,
  });

  // ✅ ARIA updates
  openBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");

  // return focus to open button
  openBtn.focus();

  document.querySelector("#mobileMenu").classList.remove("active");
}

function escKeyPressed(e) {
  if (e.key === "Escape") {
    gsap.to(".mobile-menu_panel", {
      xPercent: 100,
    });

    // ✅ keep ARIA in sync
    openBtn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");

    openBtn.focus();

    document.querySelector("#mobileMenu").classList.remove("active");
  }
}

document.addEventListener("keydown", escKeyPressed);
