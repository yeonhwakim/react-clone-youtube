import React, { useState } from "react";

function Header() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <div>logo</div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchKeyword}
          onChange={handleChange}
        />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default Header;
