
/*CALCULADORA*/

const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".box-buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

/*limpa o resultado*/
function updateResult(originclear = false) {
    result.innerText = originclear ? 0 : currentNumber.replace(",", ",");
    
}

/*TEXTO*/
const text = document.querySelector(".name");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Graça Santos";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Meu mundo tech";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);