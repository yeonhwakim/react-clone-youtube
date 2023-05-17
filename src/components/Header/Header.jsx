import React, { useEffect, useState } from "react";
import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { keyword } = useParams();

  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (matchPath("/videos/:keyword", pathname)) {
      setSearchKeyword(keyword);
      return;
    }

    setSearchKeyword("");
  }, [pathname, keyword]);

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
