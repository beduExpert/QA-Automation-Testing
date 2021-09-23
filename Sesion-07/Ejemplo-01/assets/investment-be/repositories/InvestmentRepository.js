const InvestmentRepositoryContract = require("../repositories_contracts/InvestmentRepositoryContract");
const { v4: uuidv4 } = require('uuid');

class InvestmentRepository extends InvestmentRepositoryContract {
    constructor(dbConnection) {
        super();
    }

    getId() {
        return uuidv4();
    }
}

module.exports = InvestmentRepository
