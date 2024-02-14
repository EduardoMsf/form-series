import { calcularTermino } from '../shared/logicSeries'

describe('Pruebas unitarias con los números naturales 1 - 10 para la función de SNGULAR', () => {
  test('Prueba con 1', () => {
    const valorInicial = 1;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBeNaN()
  })
  test('Prueba con 2', () => {
    const valorInicial = 2;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(Infinity)
  })
  test('Prueba con 3', () => {
    const valorInicial = 3;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(39)
  })
  test('Prueba con 4', () => {
    const valorInicial = 4;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(102)
  })
  test('Prueba con 5', () => {
    const valorInicial = 5;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(95)
  })
  test('Prueba con 6', () => {
    const valorInicial = 6;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(115)
  })
  test('Prueba con 7', () => {
    const valorInicial = 7;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(121.8)
  })
  test('Prueba con 8', () => {
    const valorInicial = 8;
    const resp = calcularTermino(valorInicial)
    expect(resp).toBe(108.5)
  })
  test('Prueba con 9', () => {
    const valorInicial = 9;
    const resp = calcularTermino(valorInicial)
    expect(parseFloat(resp.toFixed(2))).toBe(102.46)
  })
  test('Prueba con 10', () => {
    const valorInicial = 10;
    const resp = calcularTermino(valorInicial)
    expect(parseFloat(resp.toFixed(2))).toBe(87.86)
  })
})