const axios = require('axios');

const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

const makeApiCall = async () => {
    const response = await axios.get('http://localhost:3000')
    return response.data
}

const testReturnsHelloWorld = async () => {
    const expectedMessage = "Hello World!"
    await executeTest({}, expectedMessage, makeApiCall)
}


testReturnsHelloWorld();
