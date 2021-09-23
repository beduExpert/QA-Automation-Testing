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
        return new Investment(1, name, description, interest, startingAmount, 0, startDate, endDate)
    }
}


module.exports = Investment;
