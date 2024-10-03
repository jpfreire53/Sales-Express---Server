const DBopen = require("../ConfigDB.js");

const itemsDao = {
  async insertItems(saleId, items, products_id) {
    await DBopen.openDB().then((db) => {
      db.run("INSERT INTO items (description, sales_id, products_id) VALUES (?, ?, ?)", [
        items.description,
        saleId,
        products_id
      ]);
      db.close;
    });
  },

  async getItems() {
    return DBopen.openDB().then((db) => {
      return db.all("SELECT * FROM items").then((res) => res);
    });
  },
  async getItemsBySaleId(sale) {
    return DBopen.openDB().then((db) => {
      return db
        .all("SELECT * FROM items WHERE sales_id = ?", [sale.id])
        .then((res) => res);
    });
  },
};

module.exports = itemsDao;
