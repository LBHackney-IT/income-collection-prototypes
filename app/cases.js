const faker = require('faker')
const moment = require('moment')

class Cases {
  constructor() {
    this.records = []

    for (let i = 0; i < 50; i++) {
      this.records.push(this.newRecord())
    }
  }

  newRecord() {
    const startDate = faker.date.between('1960-01-01', '2019-01-01')

    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      ref: `${faker.finance.account(6)}/${faker.finance.account(2)}`,
      startDate: startDate,
      formattedStartDate: moment(startDate).format('MMM Do, YYYY'),
      paymentRef: faker.finance.account(10),
      tenure: 'Secure',
      assignedTo: 'Test (Base User)',
      accontBalance: faker.finance.amount(0, 10000, 2, '£'),
      address: faker.address.streetAddress(),
    }
  }

  first() {
    return this.records[0]
  }
}

const cases = new Cases()

module.exports = cases
