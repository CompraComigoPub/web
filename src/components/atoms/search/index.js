import React from "react";
import IcnSearch from "components/icons/IcnSearch";
// loading the sass style fot the component
import "./index.scss";

function Search(props) {
  const {
    className = "",
    children,
    onChange,
    onSearch,
    label = "",
    placeholder,
    ...other
  } = props;

  // const [value, setValue] = React.useState("");

  return (
    <div className={"atom__search-container " + className} {...other}>
      <label htmlFor="search">{label}</label>
      <div className="wrapper-search-icon">
        <IcnSearch />
      </div>

      <input
        id="search"
        name="search"
        autoComplete="off"
        // value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...other}
      />
    </div>
  );
}

export default Search;
