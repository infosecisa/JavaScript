var int1,int2,int3,int4;
var soma = 0;
var media = 0;

var int1 = prompt ("Insira um número")
var int2 = prompt ("Insira outro número")
var int3 = prompt ("Insira outro número")
var int4 = prompt ("Insira outro número")


var soma = parseInt (int1) + parseInt(int2) + parseInt(int3) + parseInt(int4); // É necessário colocar parseInt para fazer a soma
var media = (parseInt (int1) + parseInt(int2) + parseInt(int3) + parseInt(int4)) / 4; 


document.write ('A soma é ' +soma+ ' e a média é ' +media)