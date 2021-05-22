var saldoInicial, valorCompra, saldoFinal

var saldoInicial = prompt ('Insira o valor do seu saldo inicial: ');
var valorCompra = prompt ('Insira o valor da compra: ');


	if (valorCompra <= saldoInicial){

		var saldoFinal = (saldoInicial - valorCompra)
		document.write ('A compra ocorreu corretamente,')
		document.write ('\n o saldo final é ' +saldoFinal)
	}

	else {

		document.write ('Saldo insuficiente')
	}