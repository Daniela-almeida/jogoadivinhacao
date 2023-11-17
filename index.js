alert("bem vindo (a) ao jogo de adivinhação");

var numeroSecreto = parseInt(
  Math.random() * 1001
); /* Esse código gera um número aleatório entre 0 e 1000 (incluindo ambos os extremos) utilizando JavaScript.

Math.random(): Esta função retorna um número decimal pseudoaleatório no intervalo de [0, 1) (0 incluso, 1 exclusivo).
Math.random() * 1001: Multiplica o número aleatório por 1001, gerando assim um número decimal entre 0 (incluso) e 1001 (excluso).
parseInt(): Converte o número decimal obtido no passo anterior para um número inteiro, removendo qualquer parte decimal.
Resumindo, esse código gera um número inteiro aleatório entre 0 e 1000. */

while (chute != numeroSecreto) {
  var chute = prompt("Digite um numero entre 1 e 1000");
  if (chute == numeroSecreto) {
    alert("Acertou o número secreto");
  } else if (chute > numeroSecreto) {
    alert("Errou...o número secreto é menor");
  } else if (chute < numeroSecreto) {
    alert("Errou denovo...o número secreto é maior");
  }
}
