import React from "react";
import data from "./data";
import MenuList from "./MenuList";

const TreeView = () => {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="absolute left-0 top-0 h-screen bg-blue-600">
        <MenuList data={data.children} />
      </div>
    </div>
  );
};

export default TreeView;
