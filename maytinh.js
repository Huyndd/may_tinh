function add() {
    var num1 = parseInt(document.getElementById('1').value);
    var num2 = parseInt(document.getElementById('2').value);
    var add = num1 + num2;
    document.getElementById('result').innerHTML=('Result Addition: ' + add);
}
function sub() {
    var num1 = parseInt(document.getElementById('1').value);
    var num2 = parseInt(document.getElementById('2').value);
    var sub = num1 - num2;
    document.getElementById('result').innerHTML=('Result Subtraction: ' + sub);
}
function mul() {
    var num1 = parseInt(document.getElementById('1').value);
    var num2 = parseInt(document.getElementById('2').value);
    var mul = num1 * num2;
    document.getElementById('result').innerHTML=('Result Multiplication: ' + mul);
}
function div() {
    var num1 = parseInt(document.getElementById('1').value);
    var num2 = parseInt(document.getElementById('2').value);
    var div = num1 / num2;
    document.getElementById('result').innerHTML=('Result Division: ' + div);
}