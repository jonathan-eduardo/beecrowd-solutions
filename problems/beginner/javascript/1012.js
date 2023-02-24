/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1012
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [A, B, C] = input.split(' ').map(Number);

const calculateArea = (A, B, C) => {
  const polygons = {
    TRIANGULO: () => (A * C) / 2,
    CIRCULO: () => 3.14159 * C * C,
    TRAPEZIO: () => ((A + B) * C) / 2,
    QUADRADO: () => B * B,
    RETANGULO: () => A * B
  }

  Object.entries(polygons).forEach(([nome, metodo]) => {
    console.log(`${nome}: ${metodo().toFixed(3)}`);
  })
}

calculateArea(A, B, C);
