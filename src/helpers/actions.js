const getProducts = (productSet, products) => {
  const result = productSet.map(({ productId, count }) => {
    const selectedProduct = products.find(product => product.productId === productId);
    return ({ cartProduct: selectedProduct, count });
  });
  
  return result;
}

export default getProducts;