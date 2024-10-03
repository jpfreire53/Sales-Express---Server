const DBopen = require("../ConfigDB");

const productDao = {
    async insertProduct(product) {
        await DBopen.openDB().then((db) => {
            db.run(
                "INSERT INTO products (name, description, sku) VALUES (?, ?, ?)",
                [product.name, product.description, product.sku]
            )
        })
    },
    async insertProductId(product) {
        await DBopen.openDB().then((db) => {
            db.run(
                "INSERT INTO products (id, name, description, sku) VALUES (?, ?, ?)",
                [product.id, product.name, product.description, product.sku]
            )
        })
    },

    async getProducts() {
        return DBopen.openDB().then((db) => {
            return db.all("SELECT * FROM products").then(res => res)
        })
    },

    async deleteProduct(product) {
        return DBopen.openDB().then((db) => {
            return db.get("DELETE FORM products WHERE id = ?", [product.id])
        })
    },

    async getProductById(id) {
        return DBopen.openDB().then((db) => {
            return db.get("SELECT * FROM products WHERE id = ?", [id])
            .then(res => res)
        })
    },
}

module.exports = productDao;