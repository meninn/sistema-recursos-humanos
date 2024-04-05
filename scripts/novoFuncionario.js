const botaoSalvar = document.getElementsByClassName("botao-salvar")[0];

botaoSalvar.addEventListener("click", function () {
  alert("Salvo!");
});

const botaoLimpar = document.getElementsByClassName("botao-limpar")[0];

botaoLimpar.addEventListener("click", function () {
  const camposInput = document.getElementsByClassName("form-control");

  for (let campo of camposInput) {
    campo.value = "";
  }
});
