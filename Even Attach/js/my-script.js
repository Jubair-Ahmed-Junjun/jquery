$('#firstName').keyup(function () {
var firstNameValue = $('#firstName').val();
$('#f1').text(firstNameValue);
});


$('#lastName').keyup(function () {
    var lastNameValue = $('#lastName').val();
    $('#l1').text(lastNameValue);
});

$('#btn').click(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    $('#full').text(firstNameValue+" "+lastNameValue);

});