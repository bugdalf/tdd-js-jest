class CalculadorDeArea {
  calcularAreaCuadrilatero(l1=1, l2=1) {
    if (l2 == 1) l2 = l1

    return l1*l2
  }
  calcularAreaRectangulo(l, b) {
    return l*b
  }
}

module.exports = CalculadorDeArea