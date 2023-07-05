// Questão: Gerar um número randômico entre 0 e 10;

// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

// Faz um evento, pra quando clicar na tecla enter executar a função;
document.addEventListener("keydown", handleKeyEnter);

// Funções
function handleTryClick(event) {
  // Evitar as funções padrão do form;
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
    if (Number(inputNumber.value) === randomNumber) {
      handleToggle();

      // Pegar o h2 dentro do elemento do screen2 que já foi declarada;
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)!`;
    }
  } else {
    alert("Número inválido! Digite um número entre 0 e 10.");
    xAttempts -= 1;
  } 

  if(inputNumber.value == "") {
    alert("Campo vazio! Insira um número.")
    xAttempts -= 1;
  }

  xAttempts++;

  // Toda vez que roda o condigo vai limpar o campo de input;
  inputNumber.value = "";  
}

function handleResetClick () {
  handleToggle();

  // Atualiza o número randômico quando jogar novamente;
  randomNumber = Math.round(Math.random() * 10);

  // Reset o valor de tentativas de volta para 1;
  xAttempts = 1;

  // quando voltar pra jogar novamente vai deixar o campo em focus;
  inputNumber.focus();
}

function handleToggle () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

// Se a apertar a chave enter e no screen1 possuir a class hide vai executar a função de reset;
function handleKeyEnter (e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}