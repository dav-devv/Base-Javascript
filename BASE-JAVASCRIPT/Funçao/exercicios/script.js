// Crie uma função para verificar se um valor é Truthy

function verifificar(idade){
  return !!idade;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(valor){
  var ladoQuadrado = valor
  var perimetroQuadrado = ladoQuadrado *4
return perimetroQuadrado
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobreNome){
  return nome +' '+ sobreNome
}

// Crie uma função que verifica se um número é par
function isEven(numero){
  const modulo = numero % 2
  if(modulo == 0){
    return true, 'este numero é par'
  }else{
    return false, 'este numero não é par'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado){
  return typeof dado;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
  console.log('david dos santos')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {

  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);