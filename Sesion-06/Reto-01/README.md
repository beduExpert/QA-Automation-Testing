# Reto 1 - Pruebas tercer criterio de aceptación

## Desarrollo

Crear la prueba que cubra el siguiente criterio de aceptación e implementar el código necesario para pasar la prueba.

**GIVEN** una nueva inversion
**WHEN** se cuenta con el interes, monto y duración
**THEN** se calcula el monto final


<details>
  <summary>Solución</summary>

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
