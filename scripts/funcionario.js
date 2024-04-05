const arrayBotoesEditar = document.getElementsByClassName("botao-editar");

for (let botao of arrayBotoesEditar) {
  botao.addEventListener("click", function () {
    alert("Editado!");
  });
}

const arrayBotoesExcluir = document.getElementsByClassName("botao-excluir");

for (let botao of arrayBotoesExcluir) {
  botao.addEventListener("click", function () {
    alert("Excluído!");
  });
}
