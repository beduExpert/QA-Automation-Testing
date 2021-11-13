# Ejemplo 3 - TestCafe

## :dart: Objetivos

- Crear pruebas e2e con TestCafe

## ⚙ Requisitos

- WebStorm
- Node.js
- TestCafe

## Desarrollo

Test Cafe es una herramienta de automatización de código abierto y gratuita de extremo a extremo (e2e) que se utiliza
para probar aplicaciones web. Funciona en todos los entornos populares como Windows, MacOS y Linux. Con su
característica fácil de instalar en un solo comando, puede escribir scripts en JavaScript [o] TypeScript.

Para instarlo ejecutamos el comando:

`npm install --save-dev testcafe`

A continuación crearemos un archivo llamado `TestE2EExample.js` y utilizáremos la siguiente
página: https://devexpress.github.io/testcafe/example/

Fixtures

En TestCafe las pruebas deben ser organizadas en categorías llamadas fixtures. Un archivo JavaScript, TypeScript or
CoffeeScript con pruebas de TestCafe puede contener uno o más fixtures.

Las pruebas que son parte de un fixtures vienen a continuación de su declaración.

Veamos un ejemplo.

`TestE2EExample.js`

```javascript

//Importar TestCafe
import {Selector} from 'testcafe';

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});


```

Para ejecutarlo utilizamos el siguiente comando:

`testcafe firefox TestE2EExample.js`

