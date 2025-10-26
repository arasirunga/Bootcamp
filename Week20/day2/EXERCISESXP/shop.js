const products = require("./products");

function findProductByName(name) {
  const product = products.find((product) => product.name === name);
   if (product) {
    console.log("Product found:", product);
  } else {
    console.log("Product not found");
  }
}

function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

module.exports = {
  findProductByName,
  getProductsByCategory,
};

findProductByName("Laptop");
findProductByName("Earphones");
 