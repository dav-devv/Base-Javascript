var videoGames = ['Switch', 'Xbox', 'PS5', '3DS', 'PS4', 'Xbox360'];

//  var ultimoItem = videoGames.pop()

// var adicionarItem = videoGames.push('3DS')




// for (var numero = 0; numero < 10; numero++){
//   console.log(numero)
// }

for(var item = 0; item < videoGames.length; item++){
  // console.log(item)
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4'){
    break;
  }
}

videoGames.forEach(function(item, numero) {
  console.log(item, numero)
})