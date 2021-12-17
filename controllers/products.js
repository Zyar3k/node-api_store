const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing route" });

  //   try {
  //     const products = await Product.find();
  //     res.status(200).json({
  //       success: true,
  //       count: products.length,
  //       data: products,
  //     });
  //   } catch (e) {
  //     res.status(500).json({
  //       success: false,
  //       error: e,
  //     });
  //   }
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
