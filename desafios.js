/* ============================================================
   desafios.js  —  OBJETOS  ·  para quem NUNCA programou
   ------------------------------------------------------------
   Este é o MOMENTO 2: você já fez a aula guiada (pasta objeto-aluno).
   Agora é sua vez de resolver SOZINHO — as DICAS te dão o caminho.
   Pré-requisito: a aula de FUNÇÕES (vamos usá-las no Nível 3).

   A aula sobe em NÍVEIS. Em cada nível você faz 3 tipos de tarefa:

     [VEJA E PREVEJA]  o código já está pronto. ANTES de rodar,
                       escreva sua previsão. Depois rode (F5) e confira.
     [MODIFIQUE]       mude um pedacinho do código que já existe.
     [CRIE]            escreva você mesmo, do zero.

   COMO RODAR: abra desafios.html, aperte F12, veja a aba "Console".
   Salve e aperte F5 a cada mudança.

   REGRA DE OURO: um objeto agrupa dados que andam juntos.
   Cada dado tem uma ETIQUETA (a propriedade) e um VALOR.
   Para ler, use o ponto:  objeto.propriedade
   ============================================================ */


/* ================= NÍVEL 1 — CRIAR E LER ================= */

/* TAREFA 1  [VEJA E PREVEJA]
   Um objeto guarda vários dados juntos, cada um com sua etiqueta. */
let pessoa = {
  nome: "Maria",
  idade: 22
};
console.log(pessoa.nome);
console.log(pessoa.idade);
// PREVEJA (o que vai aparecer, em ordem?):  _______________________
// Agora rode e confira. Resultado esperado: Maria  /  22


/* TAREFA 2  [MODIFIQUE]
   Adicione a propriedade  cidade: "Santo Amaro"  DENTRO do objeto
   'pessoa' (na criação, junto de nome e idade — lembre da vírgula!).
   Depois mostre:  console.log(pessoa.cidade);
   DICA: dentro das chaves é sempre  etiqueta: valor  — e para ler,
         ponto:  pessoa.cidade
   Resultado esperado: Santo Amaro */
pessoa.cidade = "Santo Amaro"
console.log(pessoa.cidade)


/* TAREFA 3  [CRIE]
   Crie um objeto 'meuJogo' com DUAS propriedades: 'titulo' e 'horas'
   (o jogo que você mais jogou e quantas horas de jogo).
   Mostre as duas no console.
   DICA: siga o molde de 'pessoa' lá de cima — só mudam as etiquetas:
         let meuJogo = { titulo: "...", horas: ... };
   Resultado esperado (exemplo): FIFA  /  120 */
let meuJogo = {
   titulo: "The Witcher 3",
   horas: 60
}
console.log(meuJogo.titulo, meuJogo.horas)


/* ================= NÍVEL 2 — ALTERAR E ADICIONAR ================= */

/* TAREFA 4  [VEJA E PREVEJA]
   Dá para TROCAR o valor de uma propriedade depois de criar o objeto. */
let carro = {
  marca: "Fiat",
  ano: 2010
};
carro.ano = 2020;
console.log(carro.ano);
// PREVEJA:  _______________________
// Resultado esperado: 2020


/* TAREFA 5  [MODIFIQUE]
   a) Troque a marca do carro:      carro.marca = "..." (à sua escolha)
   b) Adicione uma propriedade NOVA depois de criado:  carro.cor = "prata";
   c) Mostre a marca e a cor.
   DICA: fora das chaves, quem trabalha é o  =  (o : ficou na criação).
   Resultado esperado: sua marca  /  prata */
carro.marca = "BYD";
carro.cor = "Branco";
console.log(carro.marca, carro.cor)


/* TAREFA 6  [CRIE]
   Promoção na papelaria do Largo Treze!
   Crie 'produto' com  nome: "Caderno"  e  preco: 50.
   Aplique 10% de desconto e mostre o preço final.
   DICA: a conta é a mesma da aula de funções (precoComDesconto):
         produto.preco = produto.preco * 0.9;
   Resultado esperado: 45 */
let produto = {
   nome: "Caderno",
   preco: 50
}
produto.preco = produto.preco * 0.9
console.log("Preço " + produto.preco)



/* ================= NÍVEL 3 — OBJETO + FUNÇÃO =================
   Aqui é o coração da aula. O objeto viaja INTEIRO para dentro
   da função — e a função lê o que precisar com o ponto. */

/* TAREFA 7  [VEJA E PREVEJA]
   'p' recebe o objeto inteiro. Dentro, lemos p.nome e p.idade. */
function apresentar(p) {
  console.log(p.nome + " tem " + p.idade + " anos");
}
apresentar(pessoa);
// PREVEJA:  _______________________
// Resultado esperado: Maria tem 22 anos


/* TAREFA 8  [VEJA E PREVEJA] — a dúvida que mais confunde
   O que acontece se você ler uma propriedade que NÃO existe? */
console.log(pessoa.nome);       // essa existe.      PREVEJA:  ______
console.log(pessoa.sobrenome);  // essa NÃO existe.  PREVEJA:  ______
// Resultado esperado: Maria  /  undefined
// LIÇÃO: propriedade que não existe devolve 'undefined' — NÃO dá erro.
// Por isso, um erro de digitação (pessoa.nmoe) passa despercebido!


/* TAREFA 9  [MODIFIQUE]
   Crie logo abaixo uma cópia de 'apresentar' chamada 'ficha' que
   RETORNA o texto (return) em vez de mostrar (console.log).
   Guarde ficha(pessoa) numa variável e mostre.
   DICA: só muda UMA linha — onde era console.log(...), vira return ...
         Depois:  let texto = ficha(pessoa);  console.log(texto);
   Resultado esperado: Maria tem 22 anos */
function ficha(a) {
   return (a.nome + " tem " + a.idade + " anos.")
}
let pessoa2 = ficha(pessoa);
console.log(pessoa2)

/* TAREFA 10  [CRIE]
   Crie 'ehMaiorDeIdade' que recebe um objeto-pessoa e RETORNA
   o resultado de  p.idade >= 18  (verdadeiro ou falso).
   Mostre ehMaiorDeIdade(pessoa).
   DICA: cabe em uma linha — return p.idade >= 18;
         (o >= já devolve true/false sozinho, nem precisa de if!)
   Resultado esperado: true */
function ehMaiorDeIdade(p) {
   return p.idade >= 18
}
console.log(ehMaiorDeIdade(pessoa))


/* ================= NÍVEL 4 — FÁBRICA DE OBJETOS ================= */

/* TAREFA 11  [USE]
   a) Crie um objeto 'colega' com nome "João" e idade 17.
   b) Use a sua 'ficha' com pessoa e com colega.
   c) Use a sua 'ehMaiorDeIdade' com colega.
   DICA: nada de função nova! 'colega' segue o molde de 'pessoa',
         e as funções que você já criou servem para QUALQUER objeto
         que tenha nome e idade.
   Resultado esperado: Maria tem 22 anos / João tem 17 anos / false */
let colega = {
   nome: "João",
   idade: "17"
}
console.log(ficha(pessoa))
console.log(ficha(colega))
console.log(ehMaiorDeIdade(colega))

/* TAREFA 12  [CRIE]
   Uma função pode FABRICAR objetos: recebe os dados e RETORNA
   um objeto pronto. Crie 'criarProduto':

       function criarProduto(nome, preco) {
         return { nome: nome, preco: preco };
       }

   (essa pode copiar igual — é o modelo da fábrica)
   Fabrique 3 produtos: Caderno 20, Caneta 5, Mochila 90.
   Mostre o nome e o preço de cada um.
   Resultado esperado: Caderno 20 / Caneta 5 / Mochila 90 */
function criarProduto(nome, preco) {
   return {nome: nome, preco: preco};
}
let produto1 = criarProduto("Caderno", 20)
let produto2 = criarProduto("Caneta", 5)
let produto3 = criarProduto("Mochila", 90)
console.log(produto1)
console.log(produto2)
console.log(produto3)


/* ================= EXTRA (opcional) — MÉTODO ================= */

/* TAREFA 13  [VEJA E PREVEJA]
   Um objeto também pode guardar uma FUNÇÃO. Ela ganha o nome de MÉTODO.
   Você já usa um método há semanas:  console.log  →  'console' é um
   objeto e 'log' é um método dele! */
let gato = {
  nome: "Mimi",
  falar: function () {
    console.log("Miau!");
  }
};
gato.falar();          // PREVEJA:  ______
console.log(gato.nome); // PREVEJA:  ______
// Resultado esperado: Miau!  /  Mimi



/* ================= REFLEXÃO (feche a aula assim) =================
   Responda nos comentários abaixo, com suas próprias palavras:

   1) O que é um objeto?  (uma frase sua)
      R: É uma variavel que você pode guardar diversos valores.

   2) Complete: "Eu uso o ponto (.) quando eu quero citar um argumento de um objeto."

   3) O que aparece quando você lê uma propriedade que não existe?
      R: Acontece um erro.

   Terminou tudo? Abra o desafio_aluno.md e leia o "PANORAMA":
   formas mais avançadas de objeto, só para conhecer.
   ============================================================ */
