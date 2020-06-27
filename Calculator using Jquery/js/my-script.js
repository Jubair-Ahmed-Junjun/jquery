$('#btn').click(function(){
    var firstNameValue = $('#firstname').val();
    var lastNameValue = $('#lastName').val();
    var fullNameValue = (firstNameValue+" "+lastNameValue);
    $('#fullName').val(fullNameValue);
});



    $('#add').click(function () {
        var firstNumberValue =Number($('#firstNumber').val());
        var secondNumberValue = Number($('#secondNumber').val());
        var result = (firstNumberValue+secondNumberValue);
        $('#resultNumber').val(result);
    });

$('#sub').click(function(){
    var firstNumberValue = Number($('#firstNumber').val());
    var secondNumberValue = Number($('#secondNumber').val());
    var result2 = firstNumberValue-secondNumberValue;
    $('#resultNumber').val(result2);
});

$('#mul').click(function () {
        var firstNumberValue = Number($('#firstNumber').val());
        var secondNumberValue = Number($('#secondNumber').val());
        var result = firstNumberValue*secondNumberValue;
        $('#resultNumber').val(result);
});

$('#div').click(function () {
var firstNumberValue =Number($('#firstNumber').val());
var seconNumberValue =Number($('#secondNumber').val());
var result = firstNumberValue/seconNumberValue;
$('#resultNumber').val(result);
});

$('#rem').click(function () {
var firstNumberValue = Number($('#firstNumber').val());
var secondNumberValue = Number($('#secondNumber').val());
var result = firstNumberValue%secondNumberValue;
});























//alert($('#hadding').text());
//alert($('#hadding').html());