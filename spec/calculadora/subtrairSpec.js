describe('Suite de testes de subtração', () => {

  var Calculadora = require('../../src/js/calculadora.js');

  it('Deve retornar 5 com valores 8 e 3', () => {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  })

  it('Deve retornar 5 para valores em texto 8 e 3', () => {
    expect(Calculadora.subtrair('8', '3')).toEqual(5);
  })

  it('Deve retornar 4 para 5.5 e 1.5', () => {
    expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
  })

  it('Deve retornar 4 para 5.5 e 1.5 texto', () => {
    expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
  })

  it('Deve retornar 0 para valor undefined e 1', () => {
    expect(Calculadora.subtrair(undefined, 1)).toEqual(0);
  })

  it('Deve retornar 0 para valor 1 e undefined ', () => {
    expect(Calculadora.subtrair(1, undefined)).toEqual(0);
  })
})