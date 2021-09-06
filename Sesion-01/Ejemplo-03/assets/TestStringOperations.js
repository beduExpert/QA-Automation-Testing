const {castPascalCaseToSnakeCase} = require("./StringOperations");


const testCastPascalCaseToSnakeCase = () => {
    castPascalCaseToSnakeCase("EstoEsUnEjemplo") === "esto_es_un_ejemplo" ? console.log("Test 1 pass") : console.log("Test 1 fail")
    castPascalCaseToSnakeCase("otroEjemplo") === "otro_ejemplo" ? console.log("Test 2 pass") : console.log("Test 2 fail")
    castPascalCaseToSnakeCase("otroejemplo") === "otroejemplo" ? console.log("Test 3 pass") : console.log("Test 3 fail")
}


testCastPascalCaseToSnakeCase()
