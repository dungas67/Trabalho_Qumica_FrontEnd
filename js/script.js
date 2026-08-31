const form = document.querySelector("#quiz-form");
const resultado = document.querySelector("#resultado");
const nota = document.querySelector("#nota");
const detalhes = document.querySelector("#detalhes");
const botaoRefazer = document.querySelector("#refazer");
 
form.addEventListener("submit", function (e) {
  e.preventDefault();
 
  let pontos = 0;
  let textoDetalhes = "";
 
  let resposta1 = document.querySelector('input[name="p1"]:checked');
  let valor1 = "";
  if (resposta1) {
    valor1 = resposta1.value;
  } else {
    valor1 = "";
  }
 
  let textoValor1 = "";
  if (valor1 == "NaNO3") {
    textoValor1 = "NaNO₃";
  } else if (valor1 == "KNO3") {
    textoValor1 = "KNO₃";
  } else if (valor1 == "KOH") {
    textoValor1 = "KOH";
  } else {
    textoValor1 = "(não respondida)";
  }
 
  if (valor1 == "KNO3") {
    pontos = pontos + 1;
    textoDetalhes +=
      `<p style="color: var(--cor-correto)">1. Qual é a fórmula química do Salitre? Você respondeu ${textoValor1}. Resposta correta!</p>`;
  } else {
    textoDetalhes +=
      `<p style="color: var(--cor-incorreto)">1. Qual é a fórmula química do Salitre? Você respondeu ${textoValor1}. Resposta correta: KNO₃</p>`;
  }
 
  let resposta2 = document.querySelector('input[name="p2"]:checked');
  let valor2 = "";
  if (resposta2) {
    valor2 = resposta2.value;
  } else {
    valor2 = "";
  }
 
  let textoValor2 = "";
  if (valor2 == "Acido") {
    textoValor2 = "Ácido";
  } else if (valor2 == "Base") {
    textoValor2 = "Base";
  } else if (valor2 == "Sal") {
    textoValor2 = "Sal";
  } else {
    textoValor2 = "(não respondida)";
  }
 
  if (valor2 == "Sal") {
    pontos = pontos + 1;
    textoDetalhes +=
      `<p style="color: var(--cor-correto)">2. Como o Salitre é classificado na química? Você respondeu ${textoValor2}. Resposta correta!</p>`;
  } else {
    textoDetalhes +=
      `<p style="color: var(--cor-incorreto)">2. Como o Salitre é classificado na química? Você respondeu ${textoValor2}. Resposta correta: Sal</p>`;
  }
 
  let resposta3 = document.querySelector('input[name="p3"]:checked');
  let valor3 = "";
  if (resposta3) {
    valor3 = resposta3.value;
  } else {
    valor3 = "";
  }
 
  let textoValor3 = "";
  if (valor3 == "Polvora") {
    textoValor3 = "Fabricação de pólvora negra";
  } else if (valor3 == "Agua") {
    textoValor3 = "Purificação de água";
  } else if (valor3 == "Combustivel") {
    textoValor3 = "Combustível de motores";
  } else {
    textoValor3 = "(não respondida)";
  }
 
  if (valor3 == "Polvora") {
    pontos = pontos + 1;
    textoDetalhes +=
      `<p style="color: var(--cor-correto)">3. Qual o uso histórico do Salitre? Você respondeu ${textoValor3}. Resposta correta!</p>`;
  } else {
    textoDetalhes +=
      `<p style="color: var(--cor-incorreto)">3. Qual o uso histórico do Salitre? Você respondeu ${textoValor3}. Resposta correta: Fabricação de pólvora negra</p>`;
  }
 
  nota.textContent = `Você acertou ${pontos} de 3. Obrigado pela sua participação!`;
  detalhes.innerHTML = textoDetalhes;
 
  form.style.display = "none";
 
  resultado.style.opacity = 0;
  resultado.style.display = "block";
  setTimeout(function () {
    resultado.style.opacity = 1;
  }, 50);
});
 
botaoRefazer.addEventListener("click", function () {
  form.reset();
  detalhes.innerHTML = "";
  nota.textContent = "";
  resultado.style.display = "none";
  form.style.display = "block";
});