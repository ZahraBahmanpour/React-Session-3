import styled from "styled-components";

const SearchInput = styled.input`
  background-color: red;
  color: ${(props) => props.$fontColor};
  &::placeholder {
    color: green;
  }
`;
export default function SearchBar({ onFilterChange, onStockChange }) {
  return (
    <div>
      {/* <input
        type="text"
        placeholder="search here..."
        onChange={(e) => onFilterChange(e.target.value)}
      /> */}
      <SearchInput
        type="text"
        placeholder="search here..."
        onChange={(e) => onFilterChange(e.target.value)}
        $fontColor={"white"}
        className={"hover:bg-blue-500"}
      />
      <br />
      <label>
        Only show products in stock
        <input
          type="checkbox"
          onChange={(e) => onStockChange(e.target.checked)}
        />
      </label>
    </div>
  );
}
