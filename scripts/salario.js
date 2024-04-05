const botaoCalcular = document.getElementsByClassName("botao-calcular")[0];

botaoCalcular.addEventListener("click", function (e) {
  e.preventDefault();

  let salarioBruto = 0;
  let impostoDeRenda = 0;
  let inss = 0;
  let salarioLiquido = 0;

  const valorHora = document.getElementById("valorHora").value;
  const horasTrabalhadas = document.getElementById("horasTrabalhadas").value;

  salarioBruto = valorHora * horasTrabalhadas;

  if (salarioBruto <= 2112) {
    impostoDeRenda = 0;
  } else if (salarioBruto >= 2112.01 && salarioBruto <= 2640) {
    impostoDeRenda = 528;
  } else if (salarioBruto >= 2640.01 && salarioBruto <= 2826.65) {
    impostoDeRenda = salarioBruto * 0.075;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    impostoDeRenda = salarioBruto * 0.15;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    impostoDeRenda = salarioBruto * 0.225;
  } else if (salarioBruto > 4664.68) {
    impostoDeRenda = salarioBruto * 0.275;
  }

  if (salarioBruto <= 1412) {
    inss = salarioBruto * 0.075;
  } else if (salarioBruto >= 1412.01 && salarioBruto <= 2666.68) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto >= 2666.69 && salarioBruto <= 4000.03) {
    inss = salarioBruto * 0.12;
  } else if (salarioBruto > 4000.03) {
    inss = salarioBruto * 0.14;
  }

  salarioLiquido = salarioBruto - impostoDeRenda - inss;

  const divResultado = document.getElementsByClassName("resultados")[0];

  divResultado.innerHTML = `
            <h3>Resultado</h3>
            <p>Salário Bruto: ${salarioBruto.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
            <p>Imposto de Renda: ${impostoDeRenda.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
            <p>INSS: ${inss.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
            <p>Salário Líquido: ${salarioLiquido.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
        `;
});
