function calcularSaldo(saldoInicial,valorCompra){

	if (saldoInicial >= valorCompra){

		var saldoFinal = (saldoInicial - valorCompra)
		document.write ('A compra ocorreu corretamente,')
		document.write ('\n o saldo final é ' +saldoFinal)
	}

	else {

		document.write ('Saldo insuficiente')
	}


}

var saldoInicial = prompt ('Insira o valor do seu saldo inicial: ');
var valorCompra = prompt ('Insira o valor da compra: ');
calcularSaldo(saldoInicial,valorCompra);