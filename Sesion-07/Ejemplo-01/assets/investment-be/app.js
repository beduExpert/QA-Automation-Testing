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
