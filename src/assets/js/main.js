import '../css/style.css'
import GenerateCpf from './module/GenerateCpf'

const display = document.querySelector('.display');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const cpfGenerated = new GenerateCpf();
    display.innerHTML = cpfGenerated.generateNewCpf();
});
