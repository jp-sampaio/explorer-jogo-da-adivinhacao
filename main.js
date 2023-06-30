// Gerar um número randômico entre 0 e 10;
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

function handleTryClick(event) {
  // Evitar as funções padrão do form;
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber');
  
  if(Number(inputNumber.value) === randomNumber) {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
    
    document
      .querySelector('.screen2 h2')
      .innerText = `Acertou em ${xAttempts} tentativas!`;
  }

  // toda vez que roda o condigo vai limpar o campo de input
  inputNumber.value = "";
  xAttempts++
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide")

  // reset o valor de tentativas de volta para 1;
  xAttempts = 1;
});