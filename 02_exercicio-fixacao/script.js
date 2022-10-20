// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

// Resposta 01
let resposta1 = minhaIdade > idadeAmiga
let resposta2 = minhaIdade - idadeAmiga

console.log("Sua idade é maior que a do seu amigo?", resposta1)
console.log("A diferença entre sua idade e a do seu amigo é", resposta2)


// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

//Resposta 02

!b && d
b && a && !d
a || d
c && !d

