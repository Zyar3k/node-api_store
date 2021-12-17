const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async error handling");
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  throw new Error("async error handling");
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
