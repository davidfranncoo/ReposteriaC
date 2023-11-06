const { Product } = require("../db");

const getProduct = async (req, res) => {
  try {
    const data = await Product.findAll();

    res.send(data);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};
const getProductByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.findAll({
      where: {
        category: category,
      },
    });
    if (data.length === 0) {
      return res.send("no hay categoria ");
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send("No existe esta categoria");
  }
};

module.exports = {
  getProduct,
  getProductByCategory,
};
