$("#cep").on("change", function () {

    var numCep = $("#cep").val().toString().replace(/-/, '').replace('.', '');
    var url = "https://viacep.com.br/ws/" + numCep + "/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success: function (dados) {
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })


})

/* Para escolher PJ */
var $divpj = $("#pjbtn");
$divpj.click(function () {
    if ($divpj.hasClass("btn-info"))
        $divpj.addClass("btn-secondary").removeClass("btn-info");
    else
        $divpj.addClass("btn-info").removeClass("btn-secondary");
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


    const termos = document.getElementById('termos')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const cnpj = document.getElementById('cnpj')
    const cep = document.getElementById('cep')
    const telefone = document.getElementById('tele')
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const data = document.getElementById('data')
    const senha = document.getElementById('senha')
    const rsenha = document.getElementById('senha2')
    const logradouro = document.getElementById('logradouro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('uf')
    const bairro = document.getElementById('bairro')
    const numero = document.getElementById('numero')


    if (termos.value == false) {
        termos.classList.add("is-invalid");
        termos.focus()
    } else {
        termos.classList.remove("is-invalid")
    }
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
    if (logradouro.value == "") {
        logradouro.classList.add("is-invalid");
        logradouro.focus()
    } else {
        logradouro.classList.remove("is-invalid")
    }
    if (cidade.value == "") {
        cidade.classList.add("is-invalid");
        cidade.focus()
    } else {
        cidade.classList.remove("is-invalid")
    }
    if (estado.value == "") {
        estado.classList.add("is-invalid");
        estado.focus()
    } else {
        estado.classList.remove("is-invalid")
    }
    if (bairro.value == "") {
        bairro.classList.add("is-invalid");
        bairro.focus()
    } else {
        bairro.classList.remove("is-invalid")
    }
    if (numero.value == "") {
        numero.classList.add("is-invalid");
        numero.focus()
    } else {
        numero.classList.remove("is-invalid")
    }
})
// mascara cpf, telefone, cnpj e cep usando jquery
$(document).ready(function () {
    $("#cep").mask('00.000-000', { placeholder: '__.___-___' });
    $("#tele").mask('(00)0000-0000', { placeholder: '(__)_____-____' });
    $("#cpf").mask('000.000.000-00', { placeholder: '___.___.___-__' });
    $("#cnpj").mask('00.000.000/0000-00', { placeholder: '__.___.___/____-__' })
    $("#data").mask('00/00/0000', { placeholder: ' ___/__/____   📅' })
})



// validador do cpf/ termos / cnpj jquery  
$(document).ready(function () {

    $.validator.addMethod('strongPassword', function (value, element) {
        return this.optional(element) ||
            value.length >= 6 &&
            /\d/.test(value) &&
            /[a-z]/i.test(value);
    }, "Sua senha deve conter ao menos 6 digitos sendo ao menos um numero e uma letra\.")

    $("#form").validate({
        rules: {
            cpf: {
                required: true,
                cpfBR: true,
                maxlength: 14,
                minlength: 14,
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
                required: true,
                postalcodeBR: true,
                maxlength: 10,
                minlength: 10,
            },
            senha: {
                required: true,
                strongPassword: true,
            },
            senha2: {
                required: true,
                equalTo: "#senha",
            },
            email: {
                required: true,
                email: true,
            },
            nome: {
                required: true,
            },
            sobrenome: {
                required: true,
            },
            tele: {
                required: true,
            },
            data: {
                required: true,
                dateNL: true,
            },
            logradouro: {
                required: true,
            },
            cidade: {
                required: true,
            },
            estado: {
                required: true,
            },
            bairro: {
                required: true,
            },
            numero: {
                required: true,
            },
            sexo: {
                required: true,
            }
        },
        messages: {
            cpf: {
                required: "Este campo é obrigatório!",
                minlength: "Deve conter no min 12 numeros!",
            },
            termos: {
                required: "Você deve aceitar os termos e condições!",
            },
            cnpj: {
                minlength: "Deve conter no min 16 numeros!",
            },
            cep: {
                required: "Este campo é obrigatório!",
                minlength: "Deve conter no min 8 numeros!",
            },
            senha: {
                required: "Este campo é obrigatório!",
                rangelength: "Deve conter entre 6 e 10 caracteres!",
            },
            senha2: {
                required: "Este campo é obrigatório!",
                equalTo: "As senhas estão diferentes, verifique!",
            },
            email: {
                required: "Este campo é obrigatório!",
            },
            nome: {
                required: "Este campo é obrigatório!",
            },
            tele: {
                required: "Este campo é obrigatório!",
            },
            data: {
                required: "Este campo é obrigatório!",
            },
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.input-group'));
            } else { // This is the default behavior 
                error.insertAfter(element);
            }
        }
    })
})

// validar força da senha 
/*$(document).ready(function(){

    $("#senha").keyup(function() {

        var strength = 1;

        if(this.value.length >= 5) {
            strength++;
        }

        if(this.value.match(/[a-z]+/)) {
            strength++;
        }

        
        if(this.value.match(/[0-9]+/)) {
            strength++;
        }

        if(this.value.match(/[A-Z]+/)) {
            strength++;
        }

        alert(strength);
    });
 });*/
