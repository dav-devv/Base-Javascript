var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
  }
  
  console.log(pessoa.nome); // 'André'
  pessoa.possuiFaculdade; // true



  var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado){
        return lado * this.lados;
    }
  }

  console.log(quadrado.area(5))
  console.log(quadrado.perimetro(5))


  Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#44e',
}

menu.color = 'blue';

menu.backgroundColor = '#000'

var bg = menu.backgroundColor