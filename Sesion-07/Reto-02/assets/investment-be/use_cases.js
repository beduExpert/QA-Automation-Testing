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
    Investment.addInvestment(addInvestmentRequest.name, addInvestmentRequest.description, repository)
}
