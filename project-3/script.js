$(document).ready(function () {   
$('#coolflower').click(function (){
    $('p').toggle();
});
    $('#keyboardplant').click(function (){
        $(this).toggleClass('bigger');
})
    $('#coolflower').draggable();
});