

// debug screen width
let screentext = document.querySelector(".screenWidth")
console.log(screentext);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    console.log(width);
    screentext.innerHTML = width
})








let preLoader = document.querySelector(".preLoader")


window.addEventListener("load", function () {
  preLoader.style.display = "none";
});


console.log("hello main");