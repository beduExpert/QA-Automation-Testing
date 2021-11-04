# Reto 3 - Implementar función de prueba


## :dart: Objetivos

- Reconocer las diferencias entre excepciones, fallas y errores
- Desarrollar una función que muestre de mejor forma los fallos en las pruebas

## Desarrollo

Desarrollar una función que permita ejecutar casos de prueba y cumpla con los siguientes requerimientos:

- En caso de que una prueba fallé imprimir: salida esperada y salida actual
- Puede ejecutar casos de prueba de multiples funciones


1. En el archivo TestStringOperations.js, añade una función llamada: `executeTest` que recibira como parametros: la entrada con la que se llamara la funcion (`input`), la salida esperada (`expectedOutput`) y la función a probar (`functionToExecute`)
3. Dentro de la funcion debemos llamar a `functionToExecute` con el valor input como entrada. Ejemplo: `functionToExecute(input)`
4. Comparar la salida esperada con la obtenida del llamado a la función. Si las salidas son iguales imprimir: `Test pass`. En caso de ser diferentes imprimir: 
`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`

<details>
  <summary>Solución</summary>
  
  1. En nuestra función executeTest ejecutamos la función que recibimos como parametro.
  2. Comparamos la salida obtenida con la esperada
  3.  Si las salidas son iguales imprimimos: `Test pass`. En caso de ser diferentes imprimimos: 
`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`


`TestStringOperations.js`

```javascript

const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase} = require("./StringOperations");


const testCastPascalCaseToSnakeCase = () => {
    executeTest("EstoEsUnEjemplo", "esto_es_un_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroEjemplo", "otro_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroejemplo", "otroejemplo", castPascalCaseToSnakeCase);
}

const testCastSnakeCaseToPascalCase = () => {
    executeTest("esto_es_un_ejemplo", "EstoEsUnEjemplo", castSnakeCaseToPascalCase);
    executeTest("otro_ejemplo", "OtroEjemplo", castSnakeCaseToPascalCase);
    // Caso de prueba que falla
    executeTest("aotroejemplo", "Otroejemplo", castSnakeCaseToPascalCase);
}

const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}


testCastPascalCaseToSnakeCase();
testCastSnakeCaseToPascalCase();



```

</details>
