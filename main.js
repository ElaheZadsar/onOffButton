// import './stylesheet.scss';

function showContainer2() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('container2').style.display = 'block';
}

function showContainer1() {
    document.getElementById('container').style.display = 'block';
    document.getElementById('container2').style.display = 'none';
}

document.addEventListener("click", showContainer2);
document.addEventListener("click", showContainer1);