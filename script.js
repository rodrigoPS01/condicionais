const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', () => {
    const imc = peso.value / ((altura.value / 100) * (altura.value / 100));
    const imcArredondado = parseFloat(imc.toFixed(2)); 

    if (imcArredondado < 16) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Baixo peso muito grave`;
    } else if (imcArredondado >= 16 && imcArredondado < 16.99) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Baixo peso grave`;
    } else if (imcArredondado >= 17 && imcArredondado < 18.49) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Baixo peso`;
    } else if (imcArredondado >= 18.50 && imcArredondado < 24.99) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Peso normal`;
    } else if (imcArredondado >= 25 && imcArredondado < 29.99) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Sobrepeso`;
    } else if (imcArredondado >= 30 && imcArredondado < 34.99) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Obesidade grau I`;
    } else if (imcArredondado >= 35 && imcArredondado < 39.99) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Obesidade grau II`;
    } else if (imcArredondado >= 40) {
        resultado.textContent = `${nome.value}, seu IMC é ${imcArredondado}: Obesidade grau III`;
    }
});
