const axios = require('axios');
const {login} = require("./Login");

const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

// const makeGetApiCall = async () => {
//     const response = await axios.get('http://localhost:3000')
//     return response.data
// }
//
// const testReturnsHelloWorld = async () => {
//     const expectedMessage = "Hello World!"
//     await executeTest({}, expectedMessage, makeGetApiCall)
// }
//
// testReturnsHelloWorld();


const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login',userCredentials)
    return response.data
}

const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "Bienvenido al sistema"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "invalidPassword"}
    const successMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_user@mail.com", password: "securePassword"}
    const successMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, makePostApiCall)
}


testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()

