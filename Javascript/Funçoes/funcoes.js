/* chamando a funçao */
function calcularAreaTerreno(largura, comprimento) /* parâmetros que serão usados no comando */

	{
		/* comando*/

		var area = largura * comprimento

		return area /* retorna o valor da area*/
	}

	/* chamando a função */

	var area = calcularAreaTerreno(15,25)
	document.write('O terreno possui ' +area+ ' metros quadrados') /* saída do resultado da área*/