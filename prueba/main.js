$(document).ready(function(){
    $("#send").click(function(){
        getchecked();
    });

})


var getchecked = function (){
    var selected='';
    $('#formulario1 input[type=checkbox').each(function(){
        if (this.checked){
            selected+=$(this).val();
        }
    });
    if(selected != ''){
        alert ('Has seleccionado: '+ selected +'<br>');
        $('#rest').html(selected);
    }else{
        alert('Debes seleccionar al menos una opcion.');
    }
    /* var resultado=$('input[type="checkbox"]:checked').val();
    alert (resultado);
    if (resultado.length>0){
        var resultadoString=resultado.length+"checkboxe(s) checked<br/>";
        resultado.each(function(){
            resultadoString+=$(this).val+"<br/>";
        });
        $("#rest").html(resultadoString);
        
    }
    else{
        $("#rest").html("NO HAY CURSOS SELECCIONADOS");
    } */
    return false;
}