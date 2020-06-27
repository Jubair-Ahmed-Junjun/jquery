function checkFirstName(){
   var a =$('#firstName').val().length;
   if (a>=6 && a<=16){
       $('#firstNameError').text(' ');
   }else {
       $('#firstNameError').text('First should be between 6 to 15 character');
   }
}

$('#firstName').click(function () {
    checkFirstName();
});

$('#firstName').blur(function () {
    checkFirstName();
});

$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName() {
var  a = $('#lastName').val().length;

if (a>=6 && a<=16){
    $('#lastNameError').text('');
}else {
    $('#lastNameError').text('Last name should be between 6 to 16 character');
}
}



$('#lastName').click(function () {
checkLastName();
});
$('#lastName').blur(function () {
checkLastName()
});

$('#lastName').keyup(function () {
checkLastName();
});



function checkemailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if (pattern.test($('#email').val())){
   $('#emailError').text(' ');
    }else {
        $('#emailError').text('Email Address not valid');
    }
}

$('#email').blur(function () {
checkemailAddress();
});
$('#email').keyup(function () {
checkemailAddress();
});

function checkPassword() {
    var passwordLength = $('#password').val().length;
    if (passwordLength>=8 && passwordLength<=100){
        $('#passwordError').text('');
    }else {
        $('#passwordError').text('Password should be at least 8 character  ');
    }
}

$('#password').blur(function () {
checkPassword();
});
$('#password').keyup(function () {
checkPassword();
});


function checkConfirmPassword() {
var passwordValue=$('#password').val();
var confirmpasswordValue = $('#conpassword').val();
if(passwordValue==confirmpasswordValue){
    $('#conpasswordError').text('');
}else {
    $('#conpasswordError').text('Password not match');
}
}

$('#conpassword').blur(function () {
checkConfirmPassword();
});
$('#conpassword').keyup(function () {
checkConfirmPassword();
});

















// $('#registrationForm').submit(function () {
//     return false;
// });