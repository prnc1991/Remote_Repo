const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute('data-target');

const count = +counter.innerText;

const speed = 100;

const increment = target / speed;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(update,20);

}else{

counter.innerText = target;

}

};

update();

});