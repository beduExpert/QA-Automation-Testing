# Ejemplo 1 - Fibonacci

## :dart: Objetivos

- Crear pruebas unitarias con jest

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest

## Desarrollo

Durante este ejemplo nos familiarizaremos con Jest y para ello realizaremos un programa que nos permita calcular el
valor de la función de fibonacci en un valor dado.

### Fibonacci

La sucesión de Fibonacci se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando
a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

![imagen](https://user-images.githubusercontent.com/5317347/133897579-a4dc4a9e-5335-4c9c-9753-0fd13cabf833.png)

![imagen](https://user-images.githubusercontent.com/5317347/133897592-a71d28b9-8708-4016-8bea-973d28df8e0e.png)

### Casos de prueba

Estableceremos nuestros casos de la siguiente forma:

Utilizaremos la entrada 0 por ser un caso base, asi mismo eligiéremos entrada 1 y 2, a partir de la entrada igual a 3
podemos elegir el valor que queramos dado que el universo de casos de prueba sera enquivalente. Por lo tnaot definimos
nuestros casos de prueba de la siguiente forma:

| Entrada | Salida |

|0 | 0 |

| 1 | 1 |

| 2 | 1 |

| 6 | 8 |

### Codificación de las pruebas

Hasta ahora hemos utilizado nuestro método `executeTest` que se encarga de hacer las verificaciones (assertions) de
nuestros valores.

```javascript
const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}
```

Sin embargo al contar con jest podemos hacer uso de sus multiples métodos de assertions que nos simplificara nuestro
trabajo de creación de pruebas.

Para instalar jest tenemos que ejecutar el siguiente comando:

`npm install --save-dev jest`

A continuación crearemos un archivo con nuestros casos de prueba

`TestFibonacci.spec.js`

```javascript

const {fibonacci} = require("./Fibonacci");


describe("TestFibonacci", () => {

    it("returns fibonacci value", async () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(6)).toEqual(8);
    });


});


```

Como podemos observar aprovechamos las assertions (`expect`) con las que cueta jest para simplificar nuestro código de
pruebas.

Y a continuación nuestra primera aproximación de solución.

`Fibonacci.js`

```javascript
const fibonacci = (n) => {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

module.exports = {fibonacci};

```

Ahora añadiremos el siguiente caso de prueba:

`expect(fibonacci(45)).toEqual(1134903170);`

Quedando nuestro archivo con los casos de prueba de la siguiente forma

`TestFibonacci.spec.js`

```
const {fibonacci} = require("./Fibonacci");


describe("TestFibonacci", () => {

    it("returns fibonacci value", async () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(6)).toEqual(8);
        expect(fibonacci(45)).toEqual(1134903170);
    });


});

```

¿Cuánto tiempo toma su ejecución?

¿Cuál crees que es la razón?


