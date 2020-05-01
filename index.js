const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

let prevColor = 'blue';

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active')
}

function changeColor() {

    let primaryColor = this.getAttribute('data-hex');
    let color = this.getAttribute('data-color');
    let shoe = document.querySelector(`.shoe[data-color="${color}"]`);
    let gradient = document.querySelector(`.gradient[data-color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[data-color="${prevColor}"]`);

    colors.forEach(color => color.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary', primaryColor);

    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(gradient => gradient.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));
