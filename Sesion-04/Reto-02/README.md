# Reto 2 - Fuerza bruta

## :dart: Objetivos

- Desarrollar un método que utilizando fuerza bruta obtenga la contraseña del usuario
- Analizar las similitudes entre una ataque de fuerza bruta y las pruebas.

## ⚙ Requisitos

- WebStorm
- Node.js

## Desarrollo

Como revisamos en el prework Un ataque de fuerza bruta es un intento de averiguar una contraseña o un nombre de usuario,
o de encontrar una página web oculta o la clave utilizada para cifrar un mensaje, mediante un enfoque de prueba y error,
con la esperanza de acertar. Este es un antiguo método de ataque, pero sigue siendo efectivo y popular entre hackers.

A continuación desarrollaremos un script de fuerza bruta para nuestro login, donde partiremos de conocer las siguientes
dos características:

- El email del usuario es: myemail@mail.com
- La contraseña del usuario es de 14 caracteres y solo contiene letras mayúsculas y minúsculas
- Los últimos 8 caracteres de la contraseña son: Password

> **💡 Nota para experto(a)**
>
> Cuando los estudiantes terminen el reto, desarrollar la conversación alrededor de estos temas:
> ¿Existen similitudes entre las pruebas y nuestro script de fuerza bruta? ¿Cuáles?
> ¿Cuál fue la complejidad de nuestro algoritmo?
> ¿De qué forma podríamos acelerar la ejecución?

<details>
  <summary>Solución</summary>

Dado que sabemos que la contraseña tendrá 14 caracteres, conocemos sus 8 últimos caracteres y que solo contiene letras.
Procedemos a generar todas las combinaciones posibles de los 6 primeros caracteres, concatenamos con el final de la
contraseña (`Password)`) y probamos una por una las contraseñas generadas

`BruteForce.js`

```javascript

const {login} = require("./Login");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const validEmail = "myemail@mail.com"
const validPasswordEnding = "Password"
const successMessage = "Bienvenido al sistema"

const findValidPassword = () => {
    for (let i1 = 0; i1 < alphabet.length; i1++) {
        for (let i2 = 0; i2 < alphabet.length; i2++) {
            for (let i3 = 0; i3 < alphabet.length; i3++) {
                for (let i4 = 0; i4 < alphabet.length; i4++) {
                    for (let i5 = 0; i5 < alphabet.length; i5++) {
                        for (let i6 = 0; i6 < alphabet.length; i6++) {
                            const password = alphabet[i1] + alphabet[i2] + alphabet[i3] + alphabet[i4] + alphabet[i5] + alphabet[i6] + validPasswordEnding

                            if (login({email: validEmail, password}) === successMessage) {
                                console.log("Contraseña encontrada: " + password)
                                return 0
                            }
                        }
                    }
                }
            }
        }
    }
}

findValidPassword()


```

</details>
