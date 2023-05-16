import React from "react";

import { useParams } from "react-router-dom";

function Result() {
  const { keyword } = useParams();

  return <div>Result - {keyword}</div>;
}

export default Result;
