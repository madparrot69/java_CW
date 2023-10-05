//1

let input1 = document.querySelector(`.input1`);

let input2 = document.querySelector(`.input2`);

let checkBtn = document.querySelector(`.btn`);

checkBtn.addEventListener(`click`, function() {
    
    let inp1 = input1.value;

    let inp2 = input2.value;

    if(inp1 && inp2){
        console.log(`Both fields are filled`);
    }
    else{
        console.log(`Not all fields are filled`);
    }
});

//2

let num1 = document.querySelector(`.chislo1`);

let num2 = document.querySelector(`.chislo2`);

let btnCheck = document.querySelector(`.btn2`);

btnCheck.addEventListener(`click`, function() {

    let ch1 = +num1.value;

    let ch2 = +num2.value;

    let sum = ch1 + ch2;

    if(sum > 10){
        console.log(`The sum is greater than 10.`);
    }
    else{
        console.log(`The amount is less than or equal to 10.`);
    }

});

//3

let inp3 = document.querySelector(".input3");

let checkBtn3 = document.querySelector(".btn3");

checkBtn3.addEventListener(`click`, function() {

    let txt3 = inp3.value;

    if(txt3.toLowerCase().includes(`javascript`)) {
        console.log(`This text includes "JavaScript"`);
    }
    else{
        console.log(`This text doesn't include "JavaScript"`);
    }
});

//4

let inp4 = document.querySelector(`.input4`);

let checkBtn4 = document.querySelector(`form`);

checkBtn4.addEventListener(`click`, function(event) {

    event.preventDefault();

    let num4 = +inp4.value;

    if(10 < num4 && num4 < 20){
        console.log(`The number is in range from 10 to 20.`);
    }
    else{
        console.log(`The number is out of range from 10 to 20.`);
    }
});

//5

let name = document.querySelector(`.name`);

let email = document.querySelector(`.email`);

let password = document.querySelector(`.password`);

let checkBtn5 = document.querySelector(`.form`);

checkBtn5.addEventListener(`click`, function(event1){
    
    event1.preventDefault();

    let N = name.value;
    let E = email.value;
    let P = password.value;

    if (
        N.length >= 3 &&
        E.includes(`@`) &&
        E.includes(`.`) &&
        P.length >= 6
    ){
        window.location.href = `Other page.html`; 
    } 
    else {
        console.log(`The data does not meet the requirements`);
    }

});