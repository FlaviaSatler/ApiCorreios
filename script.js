$(document).ready(function(){
    $('#cep').blur(function(){
        var cep = $('#cep').val() || '';
        if(!cep){
            return
        }
        var url = 'https://viacep.com.br/ws/' + cep +'/json';
        $.getJSON(url, function(data){
            if("error" in data){
                alert("CEP não encontrado");
            }

            $('#rua').text(data.logradouro);
            $('#bairro').text(data.bairro);
            $('#cidade').text(data.localidade);
            $('#estado').text(data.uf);
        });
    });
});