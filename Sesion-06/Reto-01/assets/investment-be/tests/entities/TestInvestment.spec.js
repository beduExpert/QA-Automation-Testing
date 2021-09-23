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
