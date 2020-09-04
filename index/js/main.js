$(document).ready(function(){
    $("#enviar").click(function(){
        cheked();
    })    
/*     $.ajax({
        type:'POST',
        url:'../php/clases.php'
    })
    .done(function(r){
        $("#formulario").html(r);
    })
    .fail(function(){
        alert("Error en la salida de las clases");
    }); */


})


/*     $.ajax({
        type:'POST',
        url:'../php/subclases.php',
        success:function(re){
            $('#categoria').html(re);
        }
    }); */

var cheked = function(){
    var selected='';
    $('#solicitudFormulario input[type=checkbox').each(function(){
        if (this.checked){
            selected+=$(this).val()+" - ";
        }
    });
    if(selected != ''){
        alert ('Has seleccionado: '+ selected);
    }else{
        alert('Debes seleccionar al menos una opcion.');
    }

}
