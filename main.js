
/*CALCULADORA*/

    const resultElement = document.querySelector('.result');

    function appendCharacter(character) {
        resultElement.textContent += character;
    }

    function clearDisplay() {
        resultElement.textContent = '';
    }

    function calculateResult() {
        try {
            resultElement.textContent = eval(resultElement.textContent);
        } catch (error) {
            resultElement.textContent = 'Error';
        }
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


