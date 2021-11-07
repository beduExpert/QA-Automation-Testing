# Reto 1 - Pruebas unitarias para datos inválidos

## :dart: Objetivos

- Implementar pruebas unitarias

## ⚙ Requisitos

- WebStorm
- Node.js

## Desarrollo

#### Requerimientos

GIVEN un usuario que se encuentra registrado en la aplicación WHEN ingresa su correo electrónico válido y contraseña
inválida THEN el sistema imprime "Contraseña incorrecta"

GIVEN un usuario que se encuentra registrado en la aplicación WHEN ingresa su correo electrónico inválido y contraseña
válida THEN el sistema imprime "Usuario no registrado"

1. Crea el archivo `TestLogin.js`, copia la función `executeTest` que hemos utilizado anteriormente
2. Escribe pruebas para los siguientes casos: el usuario ingresa sus datos correctamente, el usuario ingresa su
   contraseña incorrectamente y el usuario ingresa un correo equivocado.
3. Crea el archivo `Login.js` e implementa la función login que pase de forma exitosa las pruebas desarrolladas
   anteriormente.

<details>
  <summary>Solución</summary>

1. Utilizando la función `executeTest` crearemos los casos de prueba que nos permitan validar los criterios de
   aceptación.
2. En la función `login`, utilizando el arreglo `users`, validamos si los datos dle usuario existen y son correctos. Asi
   mismo hacemos uso de condicionales y ciclos para validar las condiciones especificadas.

`Login.js`

```javascript

const users = [{email: "myemail@mail.com", password: "securePassword"}]

const login = (userCredentials) => {
    let isUserRegistered = false;
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[0].email) {
            isUserRegistered = true;
            if (userCredentials.password === users[0].password) {
                return "Bienvenido al sistema";
            }
        }
    }

    return isUserRegistered ? "Contraseña incorrecta" : "Usuario no registrado";
}

module.exports = {login};

```

`TestLogin.js`

```javascript

const {login} = require("./Login");


const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "Bienvenido al sistema"
    executeTest(userCredentials, successMessage, login)
}

const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "invalidPassword"}
    const successMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, login)
}

const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_user@mail.com", password: "securePassword"}
    const successMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, login)
}


testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()

testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()

testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()


```

</details>
