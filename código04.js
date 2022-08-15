let rs = require('readline-sync')

let palavra = rs.question("Insira uma palavra: " )
let tamanhoDaPalavra = palavra.length

for(let i = 0; i < tamanhoDaPalavra; i = i+1){
    console.log(palavra.charAt(i))
}