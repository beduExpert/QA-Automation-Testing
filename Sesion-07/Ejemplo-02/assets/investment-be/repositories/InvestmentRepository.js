const InvestmentRepositoryContract = require("../repositories_contracts/InvestmentRepositoryContract");
const {v4: uuidv4} = require('uuid');

class InvestmentRepository extends InvestmentRepositoryContract {
    constructor(dbConnection) {
        super();
        this.dbConnection = dbConnection;
    }

    getId() {
        return uuidv4();
    }


    save(investment) {
        const sql = "INSERT INTO investment (id,name,description,interest,starting_amount,final_amount,start_date,end_date) VALUES (?,?,?,?,?,?,?,?)";
        const params = [investment.id, investment.name, investment.description, investment.interest, investment.startingAmount, investment.finalAmount, investment.startDate]
        db.run(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
            })
        })
    }
}

module.exports = InvestmentRepository
