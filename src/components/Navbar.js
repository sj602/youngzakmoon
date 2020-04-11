import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/text">
        <p>텍스트 작문</p>
      </Link>
      <Link to="/image">
        <p>이미지 작문</p>
      </Link>
      <Link to="/voice">
        <p>보이스 작문</p>
      </Link>
    </div>
  );
};

export default Navbar;
