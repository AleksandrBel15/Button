let minusToggle = document.querySelector(`#minusToggle`);
let plusToggle = document.querySelector(`#plusToggle`);
let number = document.getElementById(`number`);

let counter = 0;

minusToggle.addEventListener(`click`, () => {
    counter--;
    number.innerHTML = counter;
});

plusToggle.addEventListener(`click`, () => {
    counter++;
    number.innerHTML = counter;
});