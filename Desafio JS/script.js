alert('Seja bem-vindo(a) ao programa de operações matemáticas')
let firstNumber = Number(prompt('Digite o primeiro número para o cálculo'));
let secondNumber = Number(prompt('Digite o segundo número para o cálculo'));


// Sendo feito com função apenas para aprimoramento
function calc(number1, number2) {
  alert(`A soma dos números é: ${number1 + number2}`);
  alert(`A subtração dos números é: ${number1 - number2}`);
  alert(`A multiplicação é: ${number1 * number2}`);
  alert(`A divisão é: ${number1 / number2}`);
  alert(`E o resto da divisão é: ${number1 % number2}`);
  
}


let sumNumber = firstNumber + secondNumber;

sumNumber % 2 == 0 ? alert('A soma dos números é par') : alert('A soma dos números é impar');
firstNumber == secondNumber ? alert('Números iguais') : alert('Números diferentes');

calc(firstNumber, secondNumber);