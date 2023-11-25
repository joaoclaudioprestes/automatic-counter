const btnStop = document.getElementById("stopConter");
const result = document.getElementById("result");
const error = document.getElementById("erro");
const btns = [...document.querySelectorAll(".btn")];
let intervalId;

function reset() {
  result.innerText = "0";
}

function erro(mensage) {
  alert(`ERRRO: ${mensage}`);
  reset();
}

function stopConter() {
  clearInterval(intervalId);
  btnStop.classList.add("hide");
}

function automatic() {
  const counterAutomatic = (inputNumber) => {
    let i = 1;

    intervalId = setInterval(() => {
      if (i <= inputNumber) {
        result.innerText++;
        i++;
      } else {
        clearInterval(intervalId);
        btnStop.classList.add("hide");
      }
    }, 1000);
  };

  const inputNumber = document.querySelector("#input-number").value;
  if (inputNumber == "") {
    erro(
      "Para realizar a operação de contar automatico, é necessario iserir um número a ser considerado!"
    );
  } else {
    reset();
    counterAutomatic(Number(inputNumber));
    btnStop.classList.remove("hide");
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.id == "sum") {
      result.innerText++;
    } else if (btn.id == "sub") {
      result.innerText--;
      if (result.innerText < 0) {
        erro("Não é possivel utilziar um número abaixo de zero ou rezeta-lo!");
      }
    } else if (btn.id == "automatic") {
        btn.disabled = true;
        automatic();
    } else if (btn.id == "reset") {
      if (result.innerText == "0") {
        erro("Não é possivel utilziar um número abaixo de zero ou rezeta-lo!");
      } else {
        reset();
        stopConter();
      }
    } else if (btn.id == "stopConter") {
      stopConter();
    }
  });
});
