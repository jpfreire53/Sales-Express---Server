class productModel {
    constructor (product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.sku = product.sku;
    }
}

module.exports = productModel;