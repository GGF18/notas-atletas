//Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.
let atletas = [
 {
   nome: "Danilo Gonzales",
   notas: [9.5, 10, 8.9, 10, 8.88]
 },
 {
   nome: "Carolina Souza",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "William Silva",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Jennifer França",
   notas: [10, 10, 10, 9, 9.5]
 }
];
 
function calcularMedias(listaAtletas) {
for (let i = 0; i < listaAtletas.length; i++) {
    let nomeAtleta = listaAtletas[i].nome;
    let notasOriginais = listaAtletas[i].notas;


    let notasOrdenadas = [... notasOriginais].sort((a, b) => a - b);

    let notasComputadas = notasOrdenadas.slice(1,4);

    let soma = 0;
    notasComputadas.forEach(nota => {
      soma+=nota;
    });

    let mediaValida = soma / notasComputadas.length;

    console.log(`Atleta: ${nomeAtleta}`);
    console.log(`Notas Obtidas: ${notasOriginais}`);
    console.log(`Média Válida: ${mediaValida}`);
    console.log("");

  }
}

calcularMedias(atletas);
