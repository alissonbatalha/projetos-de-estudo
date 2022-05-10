
// 1 - criando array / calculando media
/* 
const notas = [10, 6.5, 8, 9];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));
*/

//--------------------------------------

// 2 - adidionando elementos na array
/*
const notas = [10, 8, 7, 9]; 
console.log(notas);
notas.push(6);
console.log(notas)
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);
*/

//--------------------------------------

// 3 - removendo item do array
/*
const notas = [10, 8, 7, 9, 6]; 
console.log(notas);
notas.pop();
console.log(notas)
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)
*/

//--------------------------------------



// 4 - dividindo com slice
/*  
const alunos = ["Alisson", "Leticia", "zeus", "babalu", "Ragnar", "Froid"];

let sala1 = alunos.slice(0, alunos.length/2);
let sala2 = alunos.slice(alunos.length/2);

console.log(alunos);
console.log(`Alunos da sala 1 : ${sala1}`);
console.log(`Alunos da sala 2 : ${sala2}`);
*/

//--------------------------------------

// 5 - alterando com splice 
/*
const nomes = ["Alisson", "Leticia", "zeus", "babalu", "Ragnar", "Froid"];

nomes.splice(5,1, "aristoteles"); 
console.log(nomes)
*/

//--------------------------------------

// 6 - concatenando arrays 
/*
const salaPython = ["Melissa", "Helena", "rodrigo"];
const salaJavascript = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaPython.concat(salaJavascript);

console.log(salasUnificadas);
*/

//--------------------------------------
// 7 - arrays com 2 dimensoes
/*
const nomes = ["Alisson", "Leticia", "zeus", "babalu", "Ragnar", "Froid"];
const medias = [10, 6.5, 8, 9];

const nomesEMedia = [nomes, medias];

console.log(`Aluno ${nomesEMedia[0][0]}` , `media ${nomesEMedia[1][0]}`);

console.log(`Aluno ${nomesEMedia[0][1]}` , `media ${nomesEMedia[1][1]}`);
*/

//--------------------------------------

// 8 - procurando nomes na lista

/*
const nomes = ["Alisson", "Leticia", "zeus", "babalu", "Ragnar", "Froid"];
const medias = [10, 6.5, 8, 9, 7, 9.5];

const nomesEMedia = [nomes, medias];

const exibeNomeENota = (nomeAluno) => {
  if(nomesEMedia[0].includes(nomeAluno)) {
    let indice = nomesEMedia[0].indexOf(nomeAluno);
    return nomesEMedia[0][indice] + ', sua media foi  ' + nomesEMedia[1][indice];
  } else {
    return 'Aluno não encontrado!'
  }
}

console.log(exibeNomeENota('zeus'));
console.log(exibeNomeENota('Froid'));
console.log(exibeNomeENota('Doug'))
*/

//--------------------------------------

// 9 - for classico

/*
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
}
*/

//--------------------------------------

// 10 - calculando media com for 

/*
const notas = [10, 6.5, 8, 7.5]; 

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(media )
*/

//--------------------------------------

// 11 - media com forEach

/*
const notas = [10, 6.5, 8 , 7.5];

let somaDasNotas = 0;

notas.forEach( nota => {
  somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(media);
*/

//--------------------------------------

// 12 - funcoes callback 

/*
const notas = [10, 6.5, 8 , 7.5];

let somaDasNotas = 0;

notas.forEach(imprimeNota(nota));

function imprimeNota () {
  console.log(nota);
}

//const media = somaDasNotas / notas.length;

//console.log(media);
*/

//--------------------------------------

// 13 - funcao map 

/*
const notas = [10, 9, 8 , 7, 6]; 

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota); 

console.log(notasAtualizadas);
*/

//--------------------------------------

// 14 - alterando string com map

/*
let nomes = ['Alisson', 'LETICIA', 'ZeUs', 'ragnar', 'babalU', 'Froid']; 

let nomesAtualizados = nomes.map( nome => nome.toUpperCase());

console.log(nomesAtualizados);
*/

//--------------------------------------

// 15 - metodo filter 

/*
const nomes = ['Alisson', 'LETICIA', 'ZeUs', 'ragnar', 'babalU', 'Froid']; 

const notas = [8, 10, 4, 3.5, 9, 6];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);

console.log(`Alunos reprovados : ${reprovados}`)
*/

//--------------------------------------

// 16 - somando com reduce

/*
const salaJs = [10, 9, 8, 7, 6, 7, 8, 9, 10];
const salaJava = [5, 6, 7, 8, 9, 5];
const salaPython = [10, 9, 8, 7, 6,]; 

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0);
  return somaDasNotas / notasDaSala.length;
}

console.log(`Média da sala de Javascript : ${mediaSala(salaJs).toFixed(2)}`);
console.log(`Média da sala de Java : ${mediaSala(salaJava).toFixed(2)}`);
console.log(`Média da sala de Python : ${mediaSala(salaPython).toFixed(2)}`);
*/

//--------------------------------------