class userModel {
  constructor(user) {
    this.id = user.id;
    this.user = user.user;
    this.name = user.name;
    this.company = user.company;
    this.cnpj = user.cnpj;
    this.password = user.password;
    this.userType = user.userType;
    this.role = user.role;
  }
}

module.exports = userModel;
