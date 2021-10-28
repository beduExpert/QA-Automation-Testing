# Reto 1 - Pruebas unitarias para datos inválidos

## Desarrollo

#### Requerimientos

GIVEN un usuario que se encuentra registrado en la aplicación WHEN ingresa su correo electrónico válido y contraseña
inválida THEN el sistema imprime "Contraseña incorrecta"

GIVEN un usuario que se encuentra registrado en la aplicación WHEN ingresa su correo electrónico inválido y contraseña
válida THEN el sistema imprime "Usuario no registrado"

<details>
  <summary>Solución</summary>

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
