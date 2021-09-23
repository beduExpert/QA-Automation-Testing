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
