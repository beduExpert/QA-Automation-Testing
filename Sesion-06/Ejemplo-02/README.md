# Ejemplo 2 - Creación de API

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

Ahora que tenemos la logíca para añadir inversiones, necesitamos exponerla para que sea accesible desde una interfaz
gráfica. Para ello crearemos una API haciendo uso de express.

Instalamos express y sql lite con el comando:

`npm install express`
`npm install sqlite3`
`npm install uuid`
`npm install supertest`

Y a continuación creamos nuestro archivo

`app.js`

```javascript
const express = require('express')
const bodyParser = require('body-parser');
const Investment = require("./entities/Investment");
const InvestmentRepository = require("./repositories/InvestmentRepository");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.post('/add-investment', (req, res) => {

    const investmentData = {
        name: req.body.name,
        description: req.body.description,
        interest: req.body.interest,
        startingAmount: req.body.startingAmount,
        startDate: new Date(req.body.startDate),
        duration: req.body.duration,
    };
    const repository = new InvestmentRepository()

    const investment = Investment.addInvestment(investmentData.name, investmentData.description, investmentData.interest, investmentData.startingAmount, investmentData.startDate, investmentData.duration, repository);

    res.send(investment);
})

module.exports = app;

```

`server.js`

```javascript
const app = require("./app");
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


```

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

        const response = await request(app).post("/add-investment").send({
            name, description, interest, startingAmount, duration: durationDays, startDate
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(name);
    });
})


```
