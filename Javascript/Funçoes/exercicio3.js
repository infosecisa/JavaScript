function calcularIdade(anoNascimento){

	const ano = 2021;
	var idade = ano - anoNascimento;
	return idade;
}


var nome = prompt ('Digite o seu nome: ');
var anoNascimento = prompt ('Digite o ano do seu nascimento: ');
var idade = calcularIdade(anoNascimento);
document.write ("Olá, seu nome é " +nome+ " e você tem "+idade+ " anos.")