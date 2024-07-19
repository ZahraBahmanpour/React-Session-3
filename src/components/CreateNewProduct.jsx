import { useState } from "react";

export default function CreateNewProduct({ onCreateNew }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState({ nameError: "", priceError: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || price === "") {
      setError({
        priceError: price === "" ? "Price Required" : "",
        nameError: name === "" ? "Name Required" : "",
      });
      return;
    }
    onCreateNew({ name, price });
    // if (name !== "" && price !== "") {
    //   onCreateNew({ name, price });
    // } else {
    //   if (name === "") {
    //     setError((error) => {
    //       return { ...error, nameError: "Name Required" };
    //     });
    //   }
    //   if (price === "") {
    //     setError((error) => {
    //       return { ...error, priceError: "Price Required" };
    //     });
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {error.nameError && (
        <span style={{ color: "red" }}>{error.nameError}</span>
      )}
      <br />
      <label>
        Price
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      {error.priceError && (
        <span style={{ color: "red" }}>{error.priceError}</span>
      )}
      <input type="submit" value={"Create New"} />
    </form>
  );
}
