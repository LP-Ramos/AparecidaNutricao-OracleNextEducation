function adicionaPacintesApi(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(adicionaPacintesApi);
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});