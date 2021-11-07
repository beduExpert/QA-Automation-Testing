# Reto 2 - Implementación de historias de usuario

## :dart: Objetivos

- Implementar código que cumpla con criterios de aceptación dados.
- Pasar de descripción de criterios de aceptación a pruebas que los validen.

## ⚙ Requisitos

- WebStorm
- Node.js


## Desarrollo

Tomando como base el siguiente caso de uso y criterios de aceptación, desarrollar un programa que mediante terminal
permita dar de alta nuevos usuarios. Implementar las pruebas correspondientes siguiendo la metodología ágil de tu
elección. No es necesario conectarnos de forma real con servicios de terceros como Facebook Y Google, dichas interacciones pueden ser simuladas.

1. Crea un archivo llamado `TestSignUp.js` y copia la función `executeTest` de la sesión pasada
2. Crea la primera prueba que valide que la función `signUpUsingEmailAndPassword` regresa el mensaje: "La contraseña debe contener al menos 8 caracteres"
Cuando la contraseña tiene menos de 8 caracteres.
3. Crea un archivo llamado `SignUp.js` y escribe el código necesario para que pase el primer caso de prueba.
4. Continúa con este flujo de trabajo para los demás criterios de aceptación. 

## Caso de uso (Sign up)

**AS** un usuario
**I WANT** poder registrarme utilizando mi correo, cuenta de facebook o google
**SO** puedo ingresar a la aplicación con mi cuenta

## Criterios de aceptación

**GIVEN** un usuario
**WHEN** se registra con correo y contraseña
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** ingresa una contraseña de longitud menor a 8 caracteres
**THEN** se le indica que requiere una contraseña de al menos 8 caracteres

**GIVEN** un usuario
**WHEN** se registra con una cuenta de facebook **sin correo** asociado
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con una cuenta de facebook con correo asociado
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con una cuenta de google
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con un correo del que ya existe una cuenta
**THEN** se le indica que el correo indicado ya está registrado

**GIVEN** un usuario
**WHEN** se registra con un correo, ligado a una cuenta de facebook de la que ya existe una cuenta
**THEN** se le indica que el correo indicado ya está registrado y que utilice el botón de Facebook

**GIVEN** un usuario
**WHEN** se registra con un correo, ligado a una cuenta de google de la que ya existe una cuenta
**THEN** se le indica que el correo indicado ya está registrado y que utilice el botón de google

<details>
  <summary>Solución</summary>

1. Utilizando la función `executeTest` crearemos los casos de prueba que nos permitan validar los criterios de aceptación.
2. En la función `signUpUsingEmailAndPassword` añadimos al arreglo `users` los datos de cada usuario que se registra, asi mismo hacemos uso de condicionales y ciclos para validar las condiciones especificadas.

`StringOperations.js`

```javascript

const users = [{email: "existingemail@mail.com", password: "12345678"}];

const signUpUsingEmailAndPassword = ({email, password}) => {
    if (password.length < 8) {
        return "La contraseña debe contener al menos 8 caracteres";
    }

    for (let index = 0; index < users.length; index++){
        if(email === users[index].email){
            return "El correo ya se encuentra registrado";
        }
    }

    users.push({email, password});
    return "Registro exitoso";
}


module.exports = {signUpUsingEmailAndPassword};


```

`TestSignUp.js`

```javascript

const {signUpUsingEmailAndPassword} = require("./SignUp");


const testReturnsPasswordTooShortMessageWhenPasswordHasLessThanEightCharacters = () => {
    executeTest({
        email: "validemail@mail.com",
        password: "1234567"
    }, "La contraseña debe contener al menos 8 caracteres", signUpUsingEmailAndPassword);
    executeTest({
        email: "validemail@mail.com",
        password: ""
    }, "La contraseña debe contener al menos 8 caracteres", signUpUsingEmailAndPassword);
}

const testReturnsEmailAlreadyRegisteredMessageWhenEmailIsAlreadyRegistered = () => {
    executeTest({
        email: "existingemail@mail.com",
        password: "12345678"
    }, "El correo ya se encuentra registrado", signUpUsingEmailAndPassword);
}

const testReturnsSuccessMessageWhenTheSignUpIsSuccessful = () => {
    executeTest({
        email: "validemail@mail.com",
        password: "12345678"
    }, "Registro exitoso", signUpUsingEmailAndPassword);
}

const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}



testReturnsPasswordTooShortMessageWhenPasswordHasLessThanEightCharacters();
testReturnsEmailAlreadyRegisteredMessageWhenEmailIsAlreadyRegistered();
testReturnsSuccessMessageWhenTheSignUpIsSuccessful();


```

</details>
