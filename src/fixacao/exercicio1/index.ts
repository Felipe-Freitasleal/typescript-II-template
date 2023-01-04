/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum ARCO_IRIS {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  AZUL_ESCURO = "azul escuro",
  VIOETA = "violeta"
}

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: ARCO_IRIS
}

const person1: pessoa = {
  nome: "Jose",
  idade: 25,
  corFavorita: ARCO_IRIS.VERDE
}

const person2: pessoa = {
  nome: "Fernanda",
  idade: 53,
  corFavorita: ARCO_IRIS.AMARELO
}

const person3: pessoa = {
  nome: "Alexandre",
  idade: 33,
  corFavorita: ARCO_IRIS.LARANJA
}

console.log([person1, person2, person3])