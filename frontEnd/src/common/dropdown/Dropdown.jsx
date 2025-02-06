import React from "react";
import { useDropdownStore } from "../../store/useDropdownStore";

const Dropdown = ({ children }) => {
  return <div className="relative flex justify-center gap-16">{children}</div>;
};

Dropdown.header = ({ children }) => {
  return (
    <div className="relative px-4 py-2 font-semibold cursor-pointer hover:text-blue-500 transition">
      {children}
    </div>
  );
};

Dropdown.item = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Dropdown;
