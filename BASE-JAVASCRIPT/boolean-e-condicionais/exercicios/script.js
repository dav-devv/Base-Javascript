// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade =25
var idadeDani = 30


// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

if(minhaIdade > idadeDani){
    console.log('eu sou maior')
}else if (minhaIdade < idadeDani) {
    console.log("eu sou menor")
} else{
    console.log('temos a mesma idade')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log("Brasil é maior que china!")
} else {
    console.log('China é maior que o Brasil!')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}