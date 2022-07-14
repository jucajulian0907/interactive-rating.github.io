const btn = document.querySelector('.btn');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const numberBtn = document.querySelectorAll('.number');
const point = document.querySelector('.point');
let stars_score = 3 

btn.addEventListener('click', onSubmit);
numberBtn.forEach( btn => {
    btn.addEventListener('click', handleNumberBtnClick);
});

function onSubmit() {
    card1.classList.add('hide');
    point.textContent = stars_score;
    card2.classList.remove('hide');
    // console.log(onSubmit)
}

function handleNumberBtnClick(event) {
    numberBtn.forEach(btn => {
        btn.classList.remove('active');
    });
   // console.log(handleNumberBtnClick)
   if (event.target.classList.contains('number')){
    event.target.classList.add('active');
} else {
    event.target.parentElement.classList.add('active');
}
stars_score = event.target.textContent;
}



stars_score = event.target.textContent;
console.log(stars_score);

// console.log(numberBtn);