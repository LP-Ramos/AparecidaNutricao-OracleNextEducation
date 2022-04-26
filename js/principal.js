var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Calcula o IMC:
function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido && !alturaEhValida){
        tdImc.textContent = "Peso e altura inválidos!";
        paciente.classList.add("paciente-invalido");

    } else if (!pesoEhValido){
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    } else if (!alturaEhValida){
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        
    } else {
        tdImc.textContent = calculaImc(peso, altura);
    }
}