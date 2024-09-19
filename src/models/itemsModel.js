class itemsModel {
  constructor(items) {
    this.id = items.id;
    this.description = items.description;
    this.sales_id = items.sales_id;
    this.products_id = items.products_id;
  }
}

module.exports = itemsModel;
