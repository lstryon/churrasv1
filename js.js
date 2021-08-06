// carne - 400g por pessoa + 6h - 650
// cerveja - 1200 ml por pessoa + 6h - 2000 ml
// bebidas - 1000 ml por pessoa + 6h - 1500 ml
//crianças valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntCarne = carnePP(duracao)*adultos + ( carnePP(duracao)/2 * criancas);
    let qntCerveja = cervejaPP(duracao)*adultos;
    let qntBebida = bebidaPP(duracao)*adultos + ( bebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<h3> Resultado: </h3>`
    resultado.innerHTML += `<p>${qntCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja/350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qntBebida/1000}L de Bebida</p>`

}

function carnePP(duracao){
    if ( duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao){
    if ( duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao){
    if ( duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}