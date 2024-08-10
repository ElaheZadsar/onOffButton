// import './stylesheet.scss';

const container = document.getElementById('container');
const container2 = document.getElementById('container2');

function onOffButtonClick() {
    if (container.style.display === "none") {
        container.style.display = "block";
        container2.style.display = "none";
    } else {
        container.style.display = "none";
        container2.style.display = "block";
    }
}

document.getElementById("circle").addEventListener("click", onOffButtonClick);
document.getElementById("circle2").addEventListener("click", onOffButtonClick);
