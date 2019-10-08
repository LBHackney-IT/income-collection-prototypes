const faker = require('faker')
const moment = require('moment')

class Cases {
  constructor() {
    this.records = []

    this.lastActions = ['SMS', 'Letter 1', 'Letter 2', 'None']
    this.agreements = ['Suspended', 'Breached', 'Live', 'None']
    this.paused = ['Yes', 'No']

    for (let i = 0; i < 50; i++) {
      this.records.push(this.newRecord())
    }
  }

  newRecord() {
    const startDate = faker.date.between('1960-01-01', '2019-01-01')
    const agreement = this.agreements[Math.floor(Math.random() * this.agreements.length)]
    const lastAction = this.lastActions[Math.floor(Math.random() * this.lastActions.length)]
    const lastActionDate = faker.date.recent(365) // 365 Days
    let lastActionString = lastAction;

    if (lastAction !== 'None') {
      lastActionString = `${lastActionString}\n${moment(lastActionDate).format('Do MMM')}`
    }

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
      lastAction: lastActionString,
      agreement: agreement,
      paused: this.paused[Math.floor(Math.random() * this.paused.length)]
    }
  }

  first() {
    return this.records[0]
  }

  find(id) {
    return this.records.find(c => c.ref === id)
  }
}

const cases = new Cases()

module.exports = cases
