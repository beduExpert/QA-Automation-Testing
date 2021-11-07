# Ejemplo 1 - Pruebas unitarias

## :dart: Objetivos

- Implementar pruebas unitarias

## ⚙ Requisitos

- WebStorm
- Node.js

## Desarrollo

Existen muchas definiciones de pruebas unitarias. Algunos autores las definen como aquellas en las que solo se prueban
una función o método. Otros amplían la definición y la llevan a probar una sola clase o un oslo paquete/modulos.

Para fines de este curso entenderemos las pruebas unitarias como aquellas donde aísla una parte del código (función,
método o clase) de dependencias externas que no puedan vivir en el mismo espacio de memoria (archivos, bases de datos,
API externas, etc.)

### Ejercicio

A continuación desarrollaremos un sistema de login teniendo en cuenta las consideraciones que revisamos sobre seguridad
en el prework.

#### Historia de usuario

AS un usuario WANT desea ingresar a la aplicación e ingresa su correo electrónico y contraseña SO puede ingresar al
sistema.

#### Requerimientos

GIVEN un usuario que se encuentra registrado en la aplicación WHEN ingresa su correo electrónico y contraseña válida
THEN el sistema le da la bienvenida

Comencemos desarrollando nuestra prueba que nos permita cumplir con este requerimiento

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

const testReturnsSuccessMessageWhenUserLoginWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "Bienvenido al sistema"
    executeTest(userCredentials, successMessage, login)
}


testReturnsSuccessMessageWhenUserLoginWithValidEmailAndPassword()

```

Y a continuación desarrollaremos la implementación

`Login.js`

```javascript
const users = [{email: "myemail@mail.com", password: "securePassword"}]

const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[0].email && userCredentials.password === users[0].password) {
            return "Bienvenido al sistema";
        }
    }
}

module.exports = {login};

```
