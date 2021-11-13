# Reto 1 - Fibonacci para valores altos

## :dart: Objetivos

- Crear pruebas unitarias con jest

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest

## Desarrollo

Como vimos en el ejemplo anterior la ejecución de nuestro código toma un tiempo considerable para casos con valores "
altos". Nuestro reto consistirá en transformar nuestra función fibonacci para lograr ejecuciones de menos de un segundo
para los siguientes casos de prueba:

```javascript

const {fibonacci} = require("./Fibonacci");


describe("TestFibonacci", () => {

    it("returns fibonacci value", () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(6)).toEqual(8);
        expect(fibonacci(45)).toEqual(1134903170);
        expect(fibonacci(50)).toEqual(12586269025);
    });


});

```

1. Añade los casos de prueba al archivo `TestFibonacci.spec.js`
2. Realiza los cambios correspondientes en la función `fibonacci` del archivo `Fibonacci.js`
4. Ejecuta tu programa con node y verifica que todos los casos de prueba se ejecuten en menos de un segundo.

<details>
  <summary>Solución</summary>

`Fibonacci.js`

```javascript

const memo = {};

const fibonacci = (n) => {

    if (memo[n] !== undefined) {
        return memo[n];
    }

    if (n === 0) {
        return memo[n] = 0;
    }

    if (n === 1) {
        return memo[n] = 1;
    }

    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

}

module.exports = {fibonacci};



```

</details>
