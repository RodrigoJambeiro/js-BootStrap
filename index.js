// Import stylesheets
import './style.css';
import './css/bootstrap.css';
import './js/bootstrap.js';

(function (w){
  var resultadoFinal = function(){
    let moeda25 = document.getElementById('25centavos');
    let moeda10 = document.getElementById('10centavos');
    let moeda5 = document.getElementById('5centavos');
    let moeda1 = document.getElementById('1centavos');

    let moedas = [];
    resultado = [];
    moedas.push(moeda25.velue);
    moedas.push(moeda10.velue);
    moedas.push(moeda5.velue);
    moedas.push(moeda1.velue);

    let valor25 = moeda25.velue * 25;
    let retorno25 = valor25/100;

    let valor10 = moeda10.velue * 10;
    let retorno10 = valor10/100;

    let valor5 = moeda5.velue * 5;
    let retorno5 = valor5/100;

    let valor1 = moeda1.velue * 1;
    let retorno1 = valor1/100;

    let somatotal = resultado;
  }
})
