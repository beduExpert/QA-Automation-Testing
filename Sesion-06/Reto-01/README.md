# Reto 1 - Pruebas tercer criterio de aceptación

## :dart: Objetivos

- Aplicar el patrón AAA (Arrange -  Act - Assert)
- Aplicar el patrón GWT (Given - When - Then)

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest

## Desarrollo

Crear la prueba que cubra el siguiente criterio de aceptación e implementar el código necesario para pasar la prueba.

**GIVEN** una nueva inversion
**WHEN** se cuenta con el interes, monto y duración
**THEN** se calcula el monto final

1. En el archivo `TestInvestment.spec.js` añade la siguiente prueba:
```it('calculates final amount based on starting amount plus interest generated in the amount of time', () => {}); ```
2. Añadir el código necesario para validar que el monto final de la inversión se calcula de forma correcta
3. En el archivo `Investment.js` implementar la logica necesaria par pasar las pruebas. 

<details>
  <summary>Solución</summary>

1. Creamos la prueba que nos permite validar que el monto final de la inversión se conecte de forma correcta.

`TestInvestment.spec.js`

```javascript
const Investment = require("../../entities/Investment");

describe('Investment', () => {
    describe('Add new investment', () => {
        it('calculates end date based on initial day plus duration', () => {
            const name = "cetes 28 days";
            const description = "cetes for 28 days";
            const interest = 4.5;
            const startingAmount = 10;
            const durationDays = 28;
            const startDate = new Date('2021-01-01');
            const expectedEndDate = new Date('2021-01-29');

            const investment = Investment.addInvestment(name, description, interest, startingAmount, startDate, durationDays);

            expect(investment.endDate).toEqual(expectedEndDate);
        });

        it('calculates final amount based on starting amount plus interest generated in the amount of time', () => {
            const name = "cetes 28 days";
            const description = "cetes for 28 days";
            const interest = 4.5;
            const startingAmount = 10;
            const durationDays = 28;
            const startDate = new Date('2021-01-01');
            const expectedFinalAmount = 10 * (1 + (((interest / 100) / 360) * durationDays));

            const investment = Investment.addInvestment(name, description, interest, startingAmount, startDate, durationDays);

            expect(investment.finalAmount).toEqual(expectedFinalAmount);
        })


    })

})
```

1. Nuestro código calcula el monto final de la inversión, tomamos 360 días como un año y a partir de ello calculamos él interese ganado en los días que dura la inversión

`Investment.js`

```javascript
class Investment {
    id;
    name;
    description;
    interest;
    startingAmount;
    finalAmount;
    startDate;
    endDate;

    constructor(id, name, description, interest, startingAmount, finalAmount, startDate, endDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.interest = interest;
        this.startingAmount = startingAmount;
        this.finalAmount = finalAmount;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    static addInvestment(name, description, interest, startingAmount, startDate, duration) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);

        return new Investment(1, name, description, interest, startingAmount, finalAmount, startDate, endDate)
    }

    static _calculateFinalAmount(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        return startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
    }
}


module.exports = Investment;

```

</details>
