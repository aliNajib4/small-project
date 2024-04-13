import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuList = ({ data, show = true }) => {
  return (
    <ul className={`m-2 list-inside list-decimal pl-3 ${show ? "" : "hidden"}`}>
      {data.map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

MenuList.propTypes = {
  data: PropTypes.array.isRequired,
  show: PropTypes.bool,
};

export default MenuList;
