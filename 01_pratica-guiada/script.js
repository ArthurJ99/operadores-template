//Prática de operadores

let saldo = 15 + 22.40
console.log("saldo", saldo)

saldo = saldo - 12.34
console.log("saldo atualizado", saldo)

saldo = saldo / 3
console.log("valor por irmão", saldo)

saldo = saldo * 3.42
console.log("valor investido", saldo)

saldo = saldo % 3
console.log("resto do checlete", saldo)

const multpESoma = 2*2+2
console.log("MS1", multpESoma)

const multpESoma2 = 2*(2 + 2)
console.log("MS2", multpESoma2)

const comparacaoIgual = 5 ===5
console.log(comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log(comparacaoDiferente)

const comparacaoTipo1 = 5 !== "5"
console.log(comparacaoTipo1)

const comparacaoTipo2 = "5" === "cinco"
console.log(comparacaoTipo2)

const comparacaoTipo3 = typeof 5 === typeof 20
console.log(comparacaoTipo3)

const comparacaoTipo4 = typeof "5" === typeof "cinco"
console.log(comparacaoTipo4)



let num1 = 2
let num2 = 8
let resultado

resultado = num1 === num2
console.log("O primeiro número é igual ao segundo", resultado)

resultado = num1 <= num2 
console.log("O primeiro número é menor ou igual que o segundo", resultado)

resultado= num1 > num2
console.log("O primeiro numero é maior que o segundo", resultado)

resultado= num1 < num2
console.log("O primeiro numero é menor que o segundo", resultado)



const a = "Quero dirigir um Celta 2012"
const b = "Sou maior de idade"
const c = "Consigo comprar o Celta por 22.000 reais"
const d = "Consigo alugar o celta"
const e = "Tento carteira de motorista"

a
!b
b && !e
b && (c || d)
(b && e) && !a

