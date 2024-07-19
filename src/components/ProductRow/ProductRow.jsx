import { useContext } from "react";
import styles from "./ProductRow.module.css";
import { ProductContext } from "../../productContext";

export default function ProductRow({ product }) {
  const { name, price, stocked, id } = product;
  const { deleteProduct } = useContext(ProductContext);

  return (
    <tr>
      <td className={`${stocked ? "" : styles["heading-red"]}`}>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => deleteProduct(id)}>Delete</button>
      </td>
    </tr>
  );
}
