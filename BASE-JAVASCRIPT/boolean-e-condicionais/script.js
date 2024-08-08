var possuiGraduação = true;
var PossuiDoutorado = true;

if(possuiGraduação) {
    console.log('possui graduação!');
} else {
    console.log('não possui graduação')
}



if(PossuiDoutorado){
    console.log('Possui graduação e doutorado!');
} else if(possuiGraduação){
     console.log("Possui Graduação!");
  } else {
    console.log('Nao possui nenhuma graduação');
  }



  var nome = "david"
if(nome){
    console.log(nome)
} else {
    console.log('nao existe nome')
}


var x = 10

console.log(x !== 10)


var condicional = ( 5 - 10 ) && ( 5 + 5 );
if(condicional ){
    console.log("verdadeiro" , condicional)
} else {
    console.log('falso')
}

var condicional2 = (5-5) || (5+5) || (10-2);

console.log(condicional2);


var corFavorita = 'Azul';

switch(corFavorita){
    case 'Azul':
        console.log("olhe para o céu");
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'verde':
        console.log('Olhe para a grama');
        break;
    default:
        console.log('feche está pagina.');
}