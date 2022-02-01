const { it } = require("@jest/globals")
const CalculadorDeArea = require("./main")

describe('Calculador de areas', () => {
  const calculadorDeArea = new CalculadorDeArea()
  it('El area de un cuadrilatero con 1 argumento', ()=>{
    const res = calculadorDeArea.calcularAreaCuadrilatero(5)
    expect(res).toBe(25)
  })

  it('El area de un cuadrilatero con 2 argumento', ()=>{
    const res = calculadorDeArea.calcularAreaCuadrilatero(10,2)
    expect(res).toBe(20)
  })

})