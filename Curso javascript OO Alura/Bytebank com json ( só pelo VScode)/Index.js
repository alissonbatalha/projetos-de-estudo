import {
  Cliente
} from "Cliente.js";
import {
  ContaCorrente
} from "ContaCorrente.js";

const cliente1 = new Cliente ();
cliente1.nome = "Zeus";
cliente1.cpf = "12345678910";
const contaCorrenteZeus = new ContaCorrente ();
contaCorrenteZeus.agencia = "1001";
contaCorrenteZeus.saldo = 320;

const cliente2 = new Cliente ();
cliente2.nome = "Ragnar";
cliente2.cpf = "10987654321";
const contaCorrenteRagnar = new ContaCorrente ();
contaCorrenteRagnar.agencia = "0110";
contaCorrenteRagnar.saldo = 160;


const cliente3 = new Cliente ();
cliente3.nome = "Babalu";
cliente3.cpf = "12345109876";
const contaCorrenteBabalu = new ContaCorrente ();
contaCorrenteBabalu.agencia = "1100-9";
contaCorrenteBabalu.saldo = 80;


const cliente4 = new Cliente ();
cliente4.nome = "Freud";
cliente4.cpf = "10987612345";
const contaCorrenteFreud = new ContaCorrente ();
contaCorrenteFreud.agencia = "1010";
contaCorrenteFreud.saldo = 0;




contaCorrenteZeus.depositar (180);
const valorSacado = contaCorrenteRagnar.sacar (20);

console.log(cliente1)
console.log(contaCorrenteZeus, "\n")
console.log(cliente2)
console.log(`Valor sacado: ${valorSacado}`)
console.log(contaCorrenteRagnar, "\n")
console.log(cliente3)
console.log(contaCorrenteBabalu, "\n")
console.log(cliente4)
console.log(contaCorrenteFreud, "\n")