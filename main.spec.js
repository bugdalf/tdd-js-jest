const { it } = require("@jest/globals")
const CalculadorDeArea = require("./main")

describe('Calculador de areas', () => {
  const calculadorDeArea = new CalculadorDeArea()
  it('El area de un cuadrado de 5x5 debe dar 25', ()=>{
    const res = calculadorDeArea.calcularAreaCuadrado(5)
    expect(res).toBe(25)
  })

})