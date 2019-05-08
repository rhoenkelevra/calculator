// const calculator = document.querySelector('.container');
// const keys = document.querySelector('.calculator__keys');

// const viewer = document.querySelector('#display');
// console.log(document.querySelector('.number'));

const el = element =>{
  if(element.charAt(0)==='#'){
    return document.querySelector(element);
  }
  return document.querySelectorAll(element);
}

const viewer = el('#display');
console.log();


