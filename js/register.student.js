$(document).ready(function(){
    $("#cep").mask("00000-000");
    $("#cpf").mask("000.000.000-00");
    $("#celular").mask("(00) 00000-0000");
    
    // jQuery.validator.addMethod("cpf", function(value, element){
    //     value = value.replace(".", "");
    //     value = value.replace("-", "").trim();
    //     if(value.length != 11){
    //         return (this.optional(element)||false);
    //     }
    //     console.log(value);
    //     return (this.optional(element) || true);
    // }, "Informe o CPF válido");

    $("#formulario").validate({
       rules: { 
            nome: 			{ required: true, minlength: 3, maxlength: 50 },
            login: 			{ required: true, minlength: 3, maxlength: 50 },
            password: 		{ required: true, minlength: 3, maxlength: 255 },
            cpf: 			{ required: true, maxlength: 14 },
            email:     		{ required: true, minlength: 3, maxlength: 50 },
            celular:		{ required: true, minlength: 12, maxlength: 14 },
            endereco:		{ maxlength: 50 },
            cidade:			{ maxlength: 30},
            bairro:			{ maxlength: 30},
            cep:			{ maxlength: 9}

       },
       messages: {
            
            nome: 			{ required: "Campo Obrigatório",
                              minlength: " O nome necessita ter mais do que 3 caracteres",
                              maxlength: " A senha não pode ultrapassar 50 caracteres"									  
                             },
                              
            login: 			{ required: "Campo Obrigatório",
                              minlength: " O login necessita ter mais do que 3 caracteres",
                              maxlength: " A senha não pode ultrapassar 50 caracteres"									  
                              },
                              
            password: 		{ required: "Campo Obrigatório",
                              minlength: " A senha necessita ter mais do que 3 caracteres",
                              maxlength: " A senha não pode ultrapassar 255 caracteres"
            },
            cpf: 			{ required: "Campo Obrigatório", maxlength: "Maximo de 11 caracteres" },
            email:     		{ required: "Campo Obrigatório", minlength: "Mínimo de 3 caracteres", maxlength: "Máximo de 50 caracteres" },
            celular:		{ required: "Campo Obrigatório", minlength: "Mínimo de 3 caracteres", maxlength: "Máximo de 14 caracteres" },
            endereco:		{ maxlength: "Máximo de 50 caracteres" },
            cidade:			{ maxlength: "Máximo de 30 caracteres"},
            bairro:			{ maxlength: "Máximo de 30 caracteres"},
            cep:			{ maxlength: "Máximo de 9 caracteres"}
    }});
});