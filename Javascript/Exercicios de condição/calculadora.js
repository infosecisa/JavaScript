var int1,int2,caso,soma,subtracao,multiplicaçao,divisao;

var int1 = prompt('Insira um número')
var int2 = prompt ('Insira outro número')
var caso = prompt('Insira +, - , * ou / ')

	switch(caso){

		case '+' :

			var soma = parseInt(int1) + parseInt(int2);
			document.write ('A soma é: ' +soma)
			break

		case '-' :

			var subtracao = int1 - int2
			document.write ('A diferença é: ' +subtracao)
			break

		case '*' :

			var multiplicacao = int1 * int2
			document.write ('A multiplicação é: ' +multiplicacao)
			break

		case '/' :

			var divisao = int1 / int2
			document.write ('A divisão é: ' +divisao)
			break

		default :
			
			break

		






	}

