class Atleta {
    constructor (nome, idade , peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

    }
calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil";
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
    if (this.idade >=14 && this.idade <=15) return "Intermediario";
    if (this.idade >=16 && this.idade <= 30) return "Adulto";
    return "Sem categoria";
}
calculaIMC() {
   return this.peso / (this.altura * this.altura);
}
calculaMediaValida() {
    let notasOrdenadas = [... this.notas].sort((a, b) => a - b);

    let notasComputadas = notasOrdenadas.slice(1,4);

    let soma = 0;
    notasComputadas.forEach(nota => {
      soma+=nota;
    });

    return  soma / notasComputadas.length;
}
obtemNomeAtleta() {
    return this.nome;
}
obtemIdadeAtleta(){
    return this.idade;
}
obtemPesoAtleta(){
    return this.peso;
}
obtemNotasAtletas(){
    return this.notas;
}
 }
const atleta = new Atleta ("Danilo Gonzales",
  25, 75, 1.85,   
[9.5, 10, 8.9, 10, 8.88]);

const atleta2 = new Atleta ("Carolina Souza",
  32, 68, 1.70,   
[8, 10, 10, 7, 9.33]);

const atleta3 = new Atleta ("William Silva",
  28, 82, 1.90,   
[7, 10, 9.5, 9.5, 8]);

const atleta4 = new Atleta ("Jennifer França",
  20, 60, 1.65,   
[10, 10, 10, 9, 9.5]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}
             Idade: ${atleta.obtemIdadeAtleta()}
             Peso: ${atleta.obtemPesoAtleta()}
             Altura: ${atleta.altura}
             Notas: ${atleta.obtemNotasAtletas()}
             Categoria: ${atleta.calculaCategoria()}
             IMC: ${atleta.calculaIMC()}
             Média Válida: ${atleta.calculaMediaValida()}`);


console.log(`Nome: ${atleta2.obtemNomeAtleta()}
             Idade: ${atleta2.obtemIdadeAtleta()}
             Peso: ${atleta2.obtemPesoAtleta()}
             Altura: ${atleta2.altura}
             Notas: ${atleta2.obtemNotasAtletas()}
             Categoria: ${atleta2.calculaCategoria()}
             IMC: ${atleta2.calculaIMC()}
             Média Válida: ${atleta2.calculaMediaValida()}`);


console.log(`Nome: ${atleta3.obtemNomeAtleta()}
             Idade: ${atleta3.obtemIdadeAtleta()}
             Peso: ${atleta3.obtemPesoAtleta()}
             Altura: ${atleta3.altura}
             Notas: ${atleta3.obtemNotasAtletas()}
             Categoria: ${atleta3.calculaCategoria()}
             IMC: ${atleta3.calculaIMC()}
             Média Válida: ${atleta3.calculaMediaValida()}`);
             
console.log(`Nome: ${atleta4.obtemNomeAtleta()}
             Idade: ${atleta4.obtemIdadeAtleta()}
             Peso: ${atleta4.obtemPesoAtleta()}
             Altura: ${atleta4.altura}
             Notas: ${atleta4.obtemNotasAtletas()}
             Categoria: ${atleta4.calculaCategoria()}
             IMC: ${atleta4.calculaIMC()}
             Média Válida: ${atleta4.calculaMediaValida()}`);
  
