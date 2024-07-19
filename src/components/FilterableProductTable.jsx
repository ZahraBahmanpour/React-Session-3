import { useContext, useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar/SearchBar";
import { ProductContext } from "../productContext";

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [isStock, setIsStock] = useState(false);
  const { products } = useContext(ProductContext);

  let filteredProducts = products.filter((p) => p.name.includes(filterText));
  console.log(isStock);
  if (isStock) {
    filteredProducts = filteredProducts.filter((p) => p.stocked);
  }
  return (
    <div>
      <SearchBar
        onFilterChange={(text) => setFilterText(text)}
        onStockChange={(ch) => setIsStock(ch)}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

// class FilterableProductTable extends React.Component {
//   constructor() {
//     this.state.theme = "dark";
//   }
// }
