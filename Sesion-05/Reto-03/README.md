# Reto 3 - Prueba TestCafe

## :dart: Objetivos

- Crear pruebas e2e con TestCafe

## ⚙ Requisitos

- WebStorm
- Node.js
- TestCafe


## Desarrollo

A continuación utilizáremos la siguiente página: https://testcafe-demo-page.glitch.me/

Nuestro objetivo es completar las siguientes acciones utilizando TestCafe

- Desliza el slider del tamaño de la pizza
- Selecciona los ingredientes
- Llena el formulario con la dirección

<details>
  <summary>Solución</summary>

```javascript

fixture`PizzaExample`
    .page`https://testcafe-demo-page.glitch.me/`;

test('Submit a form', async t => {
    await t

        // Deslizar el seleccionador de pizaa
        .drag('.noUi-handle', 100, 0)

        // seleccionar el topic
        .click('.next-step')
        .click('label[for="pepperoni"]')
        .click('#step2 .next-step')

        // llenarel formulario de la direción con el telefono
        .click('.confirm-address')
        .typeText('#phone-input', '+1-541-754-3001')
        .click('#step3 .next-step')
});

```

</details>

