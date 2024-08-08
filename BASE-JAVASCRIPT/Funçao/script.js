function areaQuadrada(lado){
    return lado * lado;
}

console.log(areaQuadrada(10));

function pi(){
    return 3.14;
}
var total = 5*pi();

console.log(total)



function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80));
console.log(imc(60, 1.70));


function corFavorita(cor){
    if(cor === "Azul"){
        return "olhe para o céu"
    }else if(cor === "Verde"){
        return "Olhe para a grama"
    }else if(cor === "Amarelo"){
        return "olhe para o sol"
    }else{
        return "feche os olhos"
    }
}


addEventListener('click', function(){
    console.log("oi")
})



function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc(80, 1.80); // retorna o imc
  console.log(imc(80, 1.80)); // retorna o imc e undefined
  


  function terceiraIdade(idade){
    console.log(typeof idade);
 if(typeof idade !== 'number'){ 
 return 'Por favor insira um numero!';
     }else if(idade >= 60){
        console.log("é idoso");
         return true;
            }else{
         return false;
    }
  }

  console.log(terceiraIdade(80))


  function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta Visitar ${totalPaises - paisesVisitados} paises`

  }