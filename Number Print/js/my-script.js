var lol = document.getElementById('btn');
lol.onclick = function () {
    var startnumber = document.getElementById('startnumber').value;
    var endingnumber = document.getElementById('endingNumber').value;
    var res = ' ';
    for(var x=startnumber;x<=endingnumber;x++){
        res+=x;
    }
    document.getElementById('result').value = res;

};