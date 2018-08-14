describe('Suite de testes de multiplicacao',()=>{
  var Calculadora = require('../../src/js/calculadora.js');

  it('Deve retornar 6 para 2 e 3',()=>{
    expect(Calculadora.multiplicar(2,3)).toEqual(6);
  });

  it('Deve retornar 6 para 2 e 3 para texto',()=>{
    expect(Calculadora.multiplicar(2,3)).toEqual(6);
  })

  it('Deve retornar 4.5 para 1.5 e 3',()=>{
    expect(Calculadora.multiplicar(1.5,3)).toEqual(4.5);
  })

  it('Deve retornar 0 para parametro 1 invalido',()=>{
    expect(Calculadora.multiplicar(undefined,4)).toEqual(0);
  })

  it('Deve retornar 0 para parametro 2 invalido',()=>{
    expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
  })

})