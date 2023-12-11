import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <button
        onClick={() => {
          setIsAdding(true);
        }}
        className="round-button"
      >
        Add Employee
      </button>
    </header>
  );
};

export default Header;
