function intervalo(int1,int2){

	
	var contador = 0;
	var i = int1

		while (i <= int2){

			if (i % 2 !== 0){ 

				var contador = parseInt (contador) + parseInt (i)
				

			}

			i++

			
		}

		alert ('A soma é: ' +contador)

}

var int1 = prompt ('Insira um número')
var int2 = prompt ('Insira outro número, diferente do primeiro')
intervalo(int1,int2)