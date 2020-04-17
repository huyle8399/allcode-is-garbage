let css = document.querySelector('h3');
let color1 = document.getElementById('colorpick-1');
let color2 = document.getElementById('colorpick-2');
let body = document.getElementById('gradient');
let random = document.getElementById('random-color');


function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}


function setGradient() {
    body.style.background = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
    css.textContent = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
}


color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);


random.addEventListener('click', () => {
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();
    
    body.style.background = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";

    css.textContent = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
});