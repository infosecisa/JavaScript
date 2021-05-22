function somaMedia(int1,int2){

	var soma = parseInt (int1) + parseInt(int2); 
	var media = (parseInt (int1) + parseInt(int2)) / 2; 


	document.write ('A soma é ' +soma+ ' e a média é ' +media);

}

var int1 = prompt ("Insira um número")
var int2 = prompt ("Insira outro número")
somaMedia(int1,int2)