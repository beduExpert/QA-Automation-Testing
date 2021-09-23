# Reto 2 - Inyección de dependencias

## Desarrollo

A continuación nos desacoplaremos del framework(express) y para ello crearemos las siguientes clases/archivos.

![img.png](img.png)

- Crea el archivo add_investment e impleméntalo como una función o una clase
- Crea las pruebas correspondientes inyectando una implementación del repositorio o una conexión a la BD.


<details>
  <summary>Solución</summary>

`add_investment.js`
```javascript

import Investment from "./investment-be/entities/Investment";

const AddInvestmentRequest = function (name, description, interest, startingAmount, durationDays, startDate) {
    this.name = name;
    this.description = description;
    this.interest = interest;
    this.startingAmount = startingAmount;
    this.durationDays = durationDays;
    this.startDate = startDate;
}

const add_investment = (addInvestmentRequest, repository) => {
    return Investment.addInvestment(addInvestmentRequest.name, addInvestmentRequest.description, repository)
}

```
</details>
