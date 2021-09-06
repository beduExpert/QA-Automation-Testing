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
