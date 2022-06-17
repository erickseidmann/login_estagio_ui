$("#cep").on("change", function () {
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/" + numCep + "/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success: function (dados) {
            console.log(dados);
            $("#cep").addClass("is-valid")
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })


})

/* Para escolher PJ ou PF */

var btn = document.querySelector('#pfbtn');
var pf = document.querySelector("#pf");

btn.addEventListener('click', function () {

    if (pf.style.display === "block") {
        pf.style.display = 'none';
    } else {
        pf.style.display = 'block';
    }
})

var btn = document.querySelector('#pjbtn');
var pj = document.querySelector("#pj");

btn.addEventListener('click', function () {

    if (pj.style.display === "block") {
        pj.style.display = 'none';
    } else {
        pj.style.display = 'block';
    }
})

/* Obrigatorio CPF, CNPJ , email   */

const btncadastrar = document.getElementById('btncadastrar')

form.addEventListener('submit', (evente) => {
    evente.preventDefault()

    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const cnpj = document.getElementById('cnpj')
    const cep = document.getElementById('cep')
    const telefone = document.getElementById('telefone')
    const termos = document.getElementById('termos')



    if (email.value == "") {
        email.classList.add("errorInput");
        email.focus()
    }else{
        email.classList.remove("errorInput")
    } 
    if (cpf.value == "") {
        cpf.classList.add("errorInput");
        cpf.focus()
    }else{
        cpf.classList.remove("errorInput")
    }
    if (cep.value == "") {
        cep.classList.add("errorInput");
        cep.focus()
    }else{
        cep.classList.remove("errorInput")
    }
    if (cnpj.value == "") {
        cnpj.classList.add("errorInput");
        cnpj.focus()
    }else{
        cnpj.classList.remove("errorInput")
    }
    if (telefone.value == "") {
        telefone.classList.add("errorInput");
        telefone.focus()
    }else{
        telefone.classList.remove("errorInput")
    }
    if (termos.value == false) {
        termos.classList.add("errorInput");
        termos.focus()
    }else{
        termos.classList.remove("errorInput")
    }
   // if((cpf.value.length === 11) && (validarCPF(cpf)) ){
   //     cpf.classList.add("errorInput");
   //     cpf.focus()
   // }else{
   //     cpf.classList.remove("errorInput")
    //}
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf('@')==1)){
        email.classList.add("errorInput")
        email.focus()
    }else{
        email.classList.remove("errorInput")
    }

})

// função para validar o cpf

function validarCPF(strCPF){
    var soma;
    var resto;
    soma = 0;
    if(strCPF === "00000000000")
        return false;
    for (i = 1; i<= 9; i++)
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10 ) || (resto == 11))
        resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)))
        return false;
    soma = 0;
    for (i = 1; i<= 10; i++)
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma* 10) % 11;
    if ((resto == 10) || (resto == 11))
        resto = 0;
    if (resto != parseInt (strCPF.substring(10,11)))
        return false;
    return true
}

// mascara cpf, telefone, cnpj e cep

function mascara_cpf(){
    var cpf = document.getElementById("cpf")
    if (cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    } else if (cpf.value.length == 11){
        cpf.value += "-"
    }
}

function mascara_cnpj(){
    var cnpj = document.getElementById("cnpj")
    if (cnpj.value.length == 2 || cnpj.value.length == 6 || cnpj.value.length == 7){
        cnpj.value += "."
    } else if (cnpj.value.length == 6){
        cnpj.value += "."
    } else if (cnpj.value.length == 10){
        cnpj.value += "/"
    }else if (cnpj.value.length == 15){
        cnpj.value += "-"
    }
}
function mascara_cep(){
    var cep = document.getElementById("cep")
    if (cep.value.length == 5){
        cep.value += "-"
    } 
}
$("#telefone").mask("(99)99999-9999")

