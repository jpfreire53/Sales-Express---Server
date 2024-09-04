class salesModel {
  constructor(sales) {
    this.id = sales.id;
    this.name = sales.name;
    this.cpf = sales.cpf;
    this.email = sales.email;
    this.value = sales.value;
    this.moneyChange = sales.moneyChange;
    this.users_id = sales.users_id;
  }
}

module.exports = salesModel;
