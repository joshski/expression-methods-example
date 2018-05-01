const assert = require("assert");

module.exports = class BalanceSteps {
  "John has a balance of {float} GBP"(balance) {
    this.johnsBalance = balance;
  }

  async "Jane has a balance of {float} GBP"(balance) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.janesBalance = balance;
        resolve();
      }, 10);
    });
  }

  "John's balance is now {float} GBP"(balance) {
    assert.equal(this.johnsBalance, balance);
  }

  "Jane's balance is now {float} GBP"(balance) {
    assert.equal(this.janesBalance, balance);
  }
};
