$("#cep").on("change", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
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

btn.addEventListener('click', function(){

    if(pf.style.display === "block"){
        pf.style.display = 'none';
    } else {
        pf.style.display = 'block';
    }
})

var btn = document.querySelector('#pjbtn');
var pj = document.querySelector("#pj");

btn.addEventListener('click', function(){

    if(pj.style.display === "block"){
        pj.style.display = 'none';
    } else {
        pj.style.display = 'block';
    }
})