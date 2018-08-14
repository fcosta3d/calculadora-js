var Calculadora = {
  ADICAO: '+',
  SUBTRACAO: '-',
  MULTIPLICACAO: '*',
  DIVISAO: '/',

  adicionar(num1, num2) {
    return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
  },

  subtrair(num1, num2) {
    return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
  },

  dividir(num1, num2) {
    if (num2 == 0) return 'Erro';
    return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
  },

  multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return 0;
    return num1 * num2;
  },

  calcular(num1, num2, operacao) {
    var resultado = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) return 0;

    switch (operacao) {
      case Calculadora.ADICAO:
        return num1 + num2;
      case Calculadora.SUBTRACAO:
        return num1 - num2;
      case Calculadora.DIVISAO:
        return num1 / num2;
      case Calculadora.MULTIPLICACAO:
        return num1 / num2;
      default:
        return 0
    }
  }
};


if (typeof module != 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Calculadora;
}
