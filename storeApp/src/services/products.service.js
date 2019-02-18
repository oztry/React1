import products from "../products";

class ProductsService {
  static getProducts() {
    return products;
  }

  static getFeaturedProductsByCategory(category) {
    return products
      .filter(product => product.category === category && product.featured)
      .slice(0, 4);
  }

  static getProductsBySearchFilter(searchText) {
    return this.getProducts().filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  static getProductsByManufacturer(productsList, manufacturer) {
    return productsList.filter(product =>
      product.manufacture.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  static getManufacturers() {
    return [...new Set(products.map(product => product.manufacture).sort())];
  }
}

export default ProductsService;
