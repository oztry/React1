import React, { Component } from "react";
import ProductService from "../../services/products.service";
import Products from "../Products/Products";
import Manufacturer from "../Manufacturer/Manufacturer";
import Styles from "./CatalogPage.module.css";
import AppStyles from "../../App.module.css";

class CatalogPage extends Component {
  state = {
    searchText: "",
    selectedManufacturer: "all"
  };

  handleSearchInput = event => {
    this.setState({ searchText: event.target.value });
  };

  handleClear = () => {
    this.setState({ searchText: "", selectedManufacturer: "all" });
  };

  handleManufacturerChange = event => {
    this.setState({
      selectedManufacturer: event.target.value
    });
  };

  render() {
    const { searchText, selectedManufacturer } = this.state;
    const manufacturers = ProductService.getManufacturers();
    let products = ProductService.getProductsBySearchFilter(searchText);
    if (selectedManufacturer !== "all")
      products = ProductService.getProductsByManufacturer(
        products,
        selectedManufacturer
      );
    return (
      <div className={AppStyles.container}>
        <h1 className={AppStyles.headerbig}>Catalog</h1>
        <div className={Styles.catalog}>
          <div className={Styles.columnleft}>
            <div className={Styles.filter}>
              <div className={Styles.filterheader}>
                <h4>Search</h4>
                <a href="#" className={Styles.clear} onClick={this.handleClear}>
                  Clear
                </a>
              </div>
              <div>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="search..."
                  value={searchText}
                  onChange={this.handleSearchInput}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="all"
                    value="all"
                    checked={selectedManufacturer === "all"}
                    onChange={this.handleManufacturerChange}
                  />
                  <label htmlFor="all">All</label>
                </div>
                {manufacturers.map(item => (
                  <Manufacturer
                    key={item}
                    item={item}
                    selectedManufacturer={selectedManufacturer}
                    onManufacturerChange={this.handleManufacturerChange}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={Styles.columnright}>
            <Products products={products} />
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogPage;
