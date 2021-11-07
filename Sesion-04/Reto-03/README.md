# Reto 3 - Endpoint para el login

## :dart: Objetivos

- Implementar pruebas de integración

## Desarrollo

A continuación crearemos un endpoint para el login, integrando nuestra logica principal.

- Añadir un nuevo endpoint para la ruta `/login`
- El endpoint debe aceptar peticiones tipo POST
- El endpoint recibirá dos parámetros: `email` y `password`
- Llamar a nuestra función `login` desde el endpoint

1. Crea el archivo `app.js` y añade un nuevo endpoint llamando login que llame al método login implementado
   anteriormente.
2. En el archivo `TestApp.js`, escribe tests que llamando al endpoint validen los siguientes escenarios: el usuario
   ingresa sus datos correctamente, el usuario ingresa su contraseña incorrectamente y el usuario ingresa un correo
   equivocado.

<details>
  <summary>Solución</summary>

`app.js`

```javascript

const {login} = require("./Login");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

```

`TestApp.js`

```javascript

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

const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
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



```

</details>
