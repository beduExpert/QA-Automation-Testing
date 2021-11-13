# Reto 2 - Generación de identificadores

## :dart: Objetivos

- Aplicar el patrón AAA (Arrange -  Act - Assert)
- Aplicar el patrón GWT (Given - When - Then)

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest

## Desarrollo

Nuestro primer criterio de aceptación indica que se creara un registro, en este punto podríamos decir que cumplimos con
él. Sin embargo nuestros objetos aún no cuentan con id y son efímeros. La persistencia es un detalle de implementación y
como tal lo dejaremos abierto para definir los detalles de su funcionamiento más tarde.

En este reto tendrás que crear una prueba que valide que el valor del ID es el esperado.

Delegaremos la responsabilidad de asignar los ID a una clase repositorio, que será del tipo de la clase abstracta que se
define a continuación. Y tendrás que crear un mock o stub de dicha clase.

**GIVEN** un usuario
**WHEN** ingresa los datos: nombre, descripción, interes, monto, fecha de inicio y duración en días
**THEN** se crea un registro de esta nueva inversion

`InvestmentRepositoryContract.js`

```javascript

class InvestmentRepositoryContract {
    getId() {
        throw new Error("You have to implement the method getId");
    }
}


1. En el archivo `TestInvestment.spec.js` añade la siguiente prueba:
    ```it('assigns id gotten from repository', () => {}); ```
2. Añadir el código necesario para validar que a la inversión reada se lea signa un id
3. En el archivo `Investment.js` implementar la logica necesaria para pasar las pruebas.


```

<details>
  <summary>Solución</summary>

1. Creamos la prueba que nos permite validar que la inversión fue creada con un id.

`TestInvestment.spec.js`

```javascript

const Investment = require("../../entities/Investment");
const InvestmentRepositoryContract = require("../../repositories_contracts/InvestmentRepositoryContract");

class InvestmentRepositoryStub extends InvestmentRepositoryContract {
    constructor(id) {
        super();
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

describe('Investment', () => {
    describe('Add new investment', () => {
        it('calculates end date based on initial day plus duration', () => {
            const name = "cetes 28 days";
            const description = "cetes for 28 days";
            const interest = 4.5;
            const startingAmount = 10;
            const durationDays = 28;
            const startDate = new Date('2021-01-01');
            const repository = new InvestmentRepositoryStub('123e4567-e89b-12d3-a456-426655440000');
            const expectedEndDate = new Date('2021-01-29');

            const investment = Investment.addInvestment(name, description, interest, startingAmount, startDate, durationDays, repository);

            expect(investment.endDate).toEqual(expectedEndDate);
        });

        it('calculates final amount based on starting amount plus interest generated in the amount of time', () => {
            const name = "cetes 28 days";
            const description = "cetes for 28 days";
            const interest = 4.5;
            const startingAmount = 10;
            const durationDays = 28;
            const startDate = new Date('2021-01-01');
            const repository = new InvestmentRepositoryStub('123e4567-e89b-12d3-a456-426655440000');
            const expectedFinalAmount = 10 * (1 + (((interest / 100) / 360) * durationDays));

            const investment = Investment.addInvestment(name, description, interest, startingAmount, startDate, durationDays, repository);

            expect(investment.finalAmount).toEqual(expectedFinalAmount);
        })

        it('assigns id gotten from repository', () => {
            const name = "cetes 28 days";
            const description = "cetes for 28 days";
            const interest = 4.5;
            const startingAmount = 10;
            const durationDays = 28;
            const startDate = new Date('2021-01-01');
            const expectedId = '123e4567-e89b-12d3-a456-426655440000';
            const repository = new InvestmentRepositoryStub(expectedId);
            const expectedFinalAmount = 10 * (1 + (((interest / 100) / 360) * durationDays));

            const investment = Investment.addInvestment(name, description, interest, startingAmount, startDate, durationDays, repository);

            expect(investment.id).toEqual(expectedId);
        })


    })

})


```

1. Nuestro código asigna un id a la inversión utilizando el método `getId()` del repositorio

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

    static addInvestment(name, description, interest, startingAmount, startDate, duration, repository) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);

        return new Investment(repository.getId(), name, description, interest, startingAmount, finalAmount, startDate, endDate)
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
