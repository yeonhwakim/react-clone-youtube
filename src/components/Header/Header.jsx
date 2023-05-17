import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${searchKeyword}`);
  };

  return (
    <div>
      <div>logo</div>
      <form onSubmit={handleSubmit}>
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
