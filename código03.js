let rs =  require('readline-sync')

let numero = rs.question('Insira um número: ')

for(let n = 1; n <= numero; n = n+1){
    console.log("Olá Mundo!!" + n)
}