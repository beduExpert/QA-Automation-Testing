const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase} = require("./StringOperations");


const testCastPascalCaseToSnakeCase = () => {
    castPascalCaseToSnakeCase("EstoEsUnEjemplo") === "esto_es_un_ejemplo" ? console.log("Test 1 pass") : console.log("Test 1 fail")
    castPascalCaseToSnakeCase("otroEjemplo") === "otro_ejemplo" ? console.log("Test 2 pass") : console.log("Test 2 fail")
    castPascalCaseToSnakeCase("otroejemplo") === "otroejemplo" ? console.log("Test 3 pass") : console.log("Test 3 fail")
}

const testCastSnakeCaseToPascalCase = () => {
    castSnakeCaseToPascalCase("esto_es_un_ejemplo") === "EstoEsUnEjemplo" ? console.log("Test 1 pass") : console.log("Test 1 fail")
    castSnakeCaseToPascalCase("otro_ejemplo") === "OtroEjemplo" ? console.log("Test 2 pass") : console.log("Test 2 fail")
    castSnakeCaseToPascalCase("otroejemplo") === "Otroejemplo" ? console.log("Test 3 pass") : console.log("Test 3 fail")
}


testCastPascalCaseToSnakeCase();
testCastSnakeCaseToPascalCase();
