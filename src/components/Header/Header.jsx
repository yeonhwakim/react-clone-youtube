import React, { useEffect, useState } from "react";
import {
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex items-center justify-center bg-zinc-950 h-20">
      <img src="/assets/images/logo.png" alt="메인로고" className="w-20" />
      <form
        className="flex items-center justify-center w-5/12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchKeyword}
          onChange={handleChange}
          className="h-15 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 focus:outline-none sm:text-sm"
        />
        <button type="submit" className="p-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-white w-6 h-6"
          />
        </button>
      </form>
    </div>
  );
}

export default Header;
