// Saber si un número es primo
function isPrimo(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

// Calcular el número dependiendo de la posición del termino "número"
function getPrimo(n) {
  if (n <= 0) return 0;
  let contador = 0, numero = 2;
  while (contador < n) {
    if (isPrimo(numero)) {
      contador++;
    }
    numero++;
  }
  return numero - 1;
}


// Calcular de acuerdo a wikipedia
function getTriangular(n) {
  return (n * (n + 1)) / 2;
}

// Back to UPIITA 1er semestre xd
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  console.log('fibonacci:', b)
  return b;
}

// Calcular la SNGULAR Serie
export function calcularTermino(n) {
  const term = (getPrimo(n + 3) * getTriangular(n - 1)) / fibonacci(n - 2);
  return term
}
