app.controller('MainController',
['$scope', function ($scope) {
	$scope.valorHora = '';
	$scope.valorHorasTrabalhadas = '';
	$scope.valorDescontoNF = '';
	$scope.valorCompras = '';
	$scope.resultado = '';
	$scope.testeMsg = 'Ok';

	$scope.calcular = function(){
		this.resultado = ((this.valorHora * this.valorHorasTrabalhadas) - this.valorDescontoNF) - this.valorCompras;
	}
}]);