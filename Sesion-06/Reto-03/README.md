# Reto 3 - Pruebas API

## :dart: Objetivos

- Identificar los principios de las pruebas unitarias
- Realizar pruebas para endpoints

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- express
- sqlite3
- uuid
- supertest


## Desarrollo

Completa las pruebas para validar los valores de la inversión creada

1. En el archivo `TestAddInvesment.spec.js` añade la siguiente prueba:
   ```it('returns new created investment', () => {}); ```
2. Añadir el código necesario para validar que todos los requerimientos de la inversión (fecha fin, id, monto final, etc.) se cumplen

<details>
  <summary>Solución</summary>

1. Creamos la prueba que nos permite validar que la inversión fue creada con: un id, fecha fin y monto final correctos.

`TestAddInvesment.spec.js`

```javascript

const request = require("supertest");
const app = require("../../app");


describe('add-investment endpoint', () => {
    it('returns new created investment', async () => {
        const name = "cetes 28 days";
        const description = "cetes for 28 days";
        const interest = 4.5;
        const startingAmount = 10;
        const durationDays = 28;
        const startDate = '2021-01-01';
        const expectedEndDate = '2021-01-29T00:00:00.000Z';
        const expectedFinalAmount = 10.035;

        const response = await request(app).post("/add-investment").send({
            name, description, interest, startingAmount, duration: durationDays, startDate
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(name);
        expect(response.body.description).toBe(description);
        expect(response.body.interest).toBe(interest);
        expect(response.body.startingAmount).toBe(startingAmount);
        expect(response.body.endDate).toBe(expectedEndDate);
    });
})



```

</details>
