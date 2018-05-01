module.exports = class TransferSteps {
  "John transfers {float} GBP to Jane"(amount) {
    this.janesBalance += amount;
    this.johnsBalance -= amount;
  }
};
