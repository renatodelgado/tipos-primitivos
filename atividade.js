/*
Crie um programa que:
● Declare uma variável chamada nome e atribua o seu nome a ela.
● Declare uma variável chamada idade e atribua a sua idade a ela.
● Imprima na tela uma mensagem como: "Olá, meu nome é [nome] e tenho [idade] anos."
*/

console.log("ATIVIDADE 1: Nome e idade");
var nome = "Renato";
let idade = 32;
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

/*
Crie um programa que:
● Declare uma variável para nome e para cidade
● Armazene as informações do tipo String em variáveis e imprima uma mensagem personalizada, como: "[Nome] é de [cidade].
*/
console.log(); console.log("ATIVIDADE 2: Nome e cidade");

var nome = "Renato";
let cidade = "Recife";

console.log(nome + " é de " + cidade + ".");

/*
Crie um programa que:
● Declare duas variáveis numéricas: num1 e num2.
● Realize as quatro operações básicas(+, -, *, /), e imprima os resultados.
*/
console.log(); console.log("ATIVIDADE 3: Operações básicas");
let num1 = 20;
let num2 = 10;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log("SOMA: " + num1 + ' + ' + num2 + " = " + soma);
console.log("SUBTRAÇÃO: " + num1 + ' - ' + num2 + " = " + subtracao);
console.log("MULTIPLICAÇÃO: " + num1 + ' * ' + num2 + " = " + multiplicacao);
console.log("DIVISÃO: " + num1 + ' / ' + num2 + " = " + divisao);

/*
Cálculo de Área:
● Declare duas variáveis numéricas: base e altura.
● Armazene nas variáveis a base e a altura de um triângulo.
● Calcule a área e exiba o resultado.
● Exemplo: “A área do triângulo é _______”.
*/

console.log(); console.log('ATIVIDADE 4: Cálculo de área de triângulo');

let baseTriangulo = 5;
let alturaTriangulo = 8;
let area = (baseTriangulo * alturaTriangulo) / 2;
console.log("A área de um triângulo com base " + baseTriangulo + " e altura " + alturaTriangulo + " é " + area + ".");

/*
Cálculo de Média:
● Declare variáveis para inserir 3 notas de um aluno.
● Crie uma nova variável chamada media, nela deve conter o cálculo da média das 3 notas.
● Exiba o resultado da média, informado a nota final.
● Exemplo: “O resultado da média é __________’”.
*/

console.log(); console.log("ATIVIDADE 5: Cálculo de média");

let nota1 = 5;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;

console.log("A média entre as notas " + nota1 + ', ' + nota2 + " e " + nota3 + " é " + media + ".");

/*
Desconto:
● Crie um programa que calcule o valor final de um produto com desconto.
● As variáveis devem informar o preço original e o percentual de desconto.
● Exiba o resultado com uma mensagem personalizada.
*/

console.log(); console.log("ATIVIDADE 6: Desconto");

let preco = 10;
let desconto = 10;

let preco_final = preco - (preco * (desconto/100));

console.log("O preço final de um produto que custa R$" + preco + " com um desconto de " + desconto + "% é R$" + preco_final + ".");

/*
Imposto de Renda:
● Simule um cálculo simplificado de imposto de renda, considerando uma tabela de alíquotas.
● A variável deve informar o salário bruto.
● Exiba o resultado com uma mensagem personalizada.
*/

console.log(); console.log("ATIVIDADE 7: Imposto de renda");

let salario_bruto = 2500;
let aliquota = 7.5

let ir = salario_bruto * (aliquota/100)

console.log("Uma pessoa que recebe R$" + salario_bruto.toFixed(2) + " deve pagar R$" + ir.toFixed(2) + " de imposto de renda.");

/*
Conversor de Moedas:
● Crie um conversor de moedas, considerando taxas de câmbio atualizadas.
● As variáveis devem guardar o valor das moedas inicial e final.
● Exiba o resultado com uma mensagem personalizada.
*/

console.log(); console.log("ATIVIDADE 8: Conversor de moedas");

let cambio = 5.57;
let real = 25;
let dolar = real / cambio;

console.log("R$" + real.toFixed(2) + ", em 14/09/24, está valendo US$" + dolar.toFixed(2) + ".")

/*
Convertendo Celsius para Fahrenheit
● Crie uma variável para a temperatura em Celsius e faça a conversão para Fahrenheit usando a fórmula (Celsius * 9/5) + 32.
● Exiba o resultado com uma mensagem personalizada.
*/

console.log(); console.log("ATIVIDADE 9: Conversor de Celsius para Fahrenheit");

let temp_celsius = 30;
let temp_fahrenheit = (temp_celsius * 9/5) + 32;
console.log(temp_celsius + "°C convertido para Fahrenheit é " + temp_fahrenheit + "°F.");

/*
Calculadora de IMC (Índice de Massa Corporal)
● Crie variáveis para peso (em kg) e altura (em metros).
● Calcule o IMC utilizando a fórmula: IMC = peso / (altura * altura).
● Exiba o resultado no console.
● Pesquise sobre o método toFixed - Clique aqui.
*/

console.log(); console.log("ATIVIDADE 10: Calculadora de IMC");

let peso = 82.3;
let altura = 1.7;
const imc = peso / (altura ** 2);
console.log("Uma pessoa que pesa " + peso + "kg e tem " + altura + "m de altura tem o IMC " + imc.toFixed(1) + ".");
