# Ejemplo 1 - Fibonacci


## Desarrollo

Durante este ejemplo nos familiarizaremos con Jest y para ello realizaremos un programa que nos permita calcular el valor de la funcion e fibonacci en un valor dado.


### Fibonacci

La sucesion de Fibonacci se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

![imagen](https://user-images.githubusercontent.com/5317347/133897579-a4dc4a9e-5335-4c9c-9753-0fd13cabf833.png)

![imagen](https://user-images.githubusercontent.com/5317347/133897592-a71d28b9-8708-4016-8bea-973d28df8e0e.png)

### Casos de prueba

Estableceremos nuestros casos de la siguiente forma:

Utilizaremos la entrada 0 por ser un caso base, asi mismo eligiremos entrada 1 y 2, a partir de la entrada igual a 3 podemos elegir el valor que queramos dado que el universo de casos de prueba sera enquivalente. Por lo tnaot definimos nuestros casos de prueba de la siguiente forma:

Entrada   Salida
0         0
1         1
2         1
6         8


### Codificacion de las pruebas

Hasta ahora hemos utilizando nuestro metodo `executeTest` que se encargaba e hacer las verificaciones (assertions) de nuestros valores.

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

Sin embargo al contar con jest podemos hacer uso de sus multiples metodos de assertions que nos simplificara nuestro trabajo de creacion de pruebas.

Para instalar jest tenemos que ejecutar el siguiente comando:

`npm -i --save-dev jest`

A continuacion crearemos un archivo 

Desarrollar casos d euso aqui, reto que falle con vlaores altos y cambien a iteraitivo con memorizacion

Crear todo list en vue y probar

Si queda espacio cucumber


