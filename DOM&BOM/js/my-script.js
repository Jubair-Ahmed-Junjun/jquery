
//Create Element with javascript without html


var a = document.createElement('h1');
var b = document.createElement('p');

a.innerHTML = "This is Hading.";
b.innerHTML = "Some content Here.";
document.getElementById('div').appendChild(a);
document.getElementById('div').appendChild(b);




//Click Button to the n number of outputs
function createhadingparagraph(){
    var a = document.createElement('h1');
    var b = document.createElement('p');

    a.innerHTML = "This is Hading";
    b.innerHTML = "Some content Here.";
    document.getElementById('div').appendChild(a);
    document.getElementById('div').appendChild(b);
};
     document.getElementById('btn').onclick = function () {
         createhadingparagraph();
     };