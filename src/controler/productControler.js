const productModel = require("../models/productModel");
const productDao = require("../dao/productDao");

const productControler = {
    async registrarProduto(req, res) {
        try {
            const product = new productModel(req.body);
            const allProducts = await productDao.getProducts();

            if (allProducts !== undefined && allProducts.length > 0) {
                const isProdutctExist = allProducts.find((productAll) => productAll.sku === product.sku);
                if (isProdutctExist.sku === product.sku) {
                    return res.status(400).json({
                        message: "Produto já cadastrado no banco.",
                        type: "e",
                      }); 
                } else {
                    await productDao.insertProduct(product);

                    return res.status(200).json({
                        message: "Produto criado com sucesso.",
                        type: "s",
                      });
                }
            } 
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar o produto.", type: "e" });
        }
    },

    async listarProdutos(req, res) {
        try {
            const products = await productDao.getProducts();

            res.status(200).json({ type: "s", message: "Sucesso ao retornar os produtos", products: products });
        } catch (error) {
            res.status(400).json({ type: "e", message: `Erro ao retornar os produtos ${error.message}` });            
        }
    },

    async listarProdutosPorId(req, res) {
        try {
            const { id } = req.params; 
            const products = await productDao.getProductById(id);

            res.status(200).json({ type: "s", message: "Sucesso ao retornar os produtos", products: products });
        } catch (error) {
            res.status(400).json({ type: "e", message: `Erro ao retornar os produtos ${error.message}` });            
        }
    }
}

module.exports = productControler;