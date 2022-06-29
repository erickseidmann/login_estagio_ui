$("#cep").on("change", function () {

    var numCep = $("#cep").val().toString().replace(/-/, '').replace('.', '');
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

/* Para escolher PJ */

$(document).ready(function(){
   $(".bot-click").click(function(){
      $(".bot-click")
      .removeClass("btn-info");
      $(this)
      .addClass("btn-secondary"); 
   });
});


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
    const telefone = document.getElementById('tele')
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const data = document.getElementById('data')
    const senha = document.getElementById('senha')
    const rsenha = document.getElementById('rsenha')
    const termos = document.getElementById('termos')

    if (email.value == "") {
        email.classList.add("is-invalid");
        email.focus()
    } else {
        email.classList.remove("is-invalid")
    }
    if (data.value == "") {
        data.classList.add("is-invalid");
        data.focus()
    } else {
        data.classList.remove("is-invalid")
    }
    if (senha.value == "") {
        senha.classList.add("is-invalid");
        senha.focus()
    } else {
        senha.classList.remove("is-invalid")
    }
    if (rsenha.value == "") {
        rsenha.classList.add("is-invalid");
        rsenha.focus()
    } else {
        rsenha.classList.remove("is-invalid")
    }
    if (termos.value == false) {
        termos.classList.add("is-invalid");
        termos.focus()
    } else {
        termos.classList.remove("is-invalid")
    }
    if (cpf.value == false) {
        cpf.classList.add("is-invalid");
        cpf.focus()
    } else {
        cpf.classList.remove("is-invalid")
    }
    if (cep.value == false) {
        cep.classList.add("is-invalid");
        cep.focus()
    } else {
        cep.classList.remove("is-invalid")
    }
    if (cnpj.value == false) {
        cnpj.classList.add("is-invalid");
        cnpj.focus()
    } else {
        cnpj.classList.remove("is-invalid")
    }
    if (telefone.value == "") {
        telefone.classList.add("is-invalid");
        telefone.focus()
    } else {
        telefone.classList.remove("is-invalid")
    }
    if (nome.value == "") {
        nome.classList.add("is-invalid")
        nome.focus()
    } else {
        nome.classList.remove("is-invalid")
    }
    if (sobrenome.value == "") {
        sobrenome.classList.add("is-invalid");
        sobrenome.focus()
    } else {
        sobrenome.classList.remove("is-invalid")
    }


    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf('@') == 1)) {
        email.classList.add("is-invalid")
        email.focus()
    } else {
        email.classList.remove("is-invalid")
    }

})
// mascara cpf, telefone, cnpj e cep usando js puro
/*function mascara_cpf(){
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
    if (cep.value.length == 6){
        cep.value += "-"
    }else if (cep.value.length == 2){
        cep.value += "." 
    }
}
function mascara_telefone(){
    var telefone = document.getElementById("telefone")
    if (telefone.value.length == 0 || telefone.value.length == 1){
        telefone.value += "("
    }else if (telefone.value.length == 3){
        telefone.value += ")"
    }else if (telefone.value.length == 9){
        telefone.value += "-"
    }  
}*/
// mascara cpf, telefone, cnpj e cep usando jquery
$(document).ready(function () {
    $("#cep").mask('00.000-000', { placeholder: '__.___-___' });
    $("#tele").mask('(00)0000-0000', { placeholder: '(__)_____-____' });
    $("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
    $("#cnpj").mask('00.000.000/0000-00', { placeholder: '__.___.___/____-__' })
})


// validador do cpf 
/*function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
var strCPF = document.getElementById('cpf');
var cpf = strCPF;

if (cpf.value == false) {
    cpf.classList.add("errorInput");
    cpf.focus()
}else{
    cpf.classList.remove("errorInput")
}*/

$(document).ready(function () {
    $("#form").validate({
        rules: {
            cpf: {
                cpfBR: true,
            },
            termos: {
                required: true,
            },
            cnpj: {
                maxlength: 18,
                minlength: 18,
                cnpjBR: true,
            },
            cep: {
                postalcodeBR: true,
            },
        }
    })
})

