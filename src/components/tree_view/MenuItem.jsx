import MenuList from "./MenuList";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const MenuItem = ({ data }) => {
  const [show, setShow] = useState(true);
  return (
    <li className="flex flex-col">
      <p
        onClick={() => setShow(!show)}
        className="flex items-center justify-between"
      >
        {data.name} {data.children && (show ? <FaMinus /> : <FaPlus />)}
      </p>
      {data.children && <MenuList data={data.children} show={show} />}
    </li>
  );
};

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MenuItem;
