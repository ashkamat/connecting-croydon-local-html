


let screentext = document.querySelector(".screenWidth")
console.log(screentext);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    console.log(width);
    screentext.innerHTML = width
})