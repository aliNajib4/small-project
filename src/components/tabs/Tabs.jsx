import PropTypes from "prop-types";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hidden, setHidden] = useState(true);
  return (
    <div className="absolute top-0 h-full w-full">
      <div
        className={
          "tabs center fixed w-full gap-3 bg-yellow-400 py-5 duration-1000 " +
          (hidden ? "-translate-y-full" : "")
        }
      >
        {data.map(({ label }, index) => (
          <div
            key={index}
            className={`tab cursor-pointer px-5 py-2 ${activeTab === index ? "bg-yellow-400 hover:bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </div>
        ))}

        <button
          onClick={() => setHidden(!hidden)}
          className="absolute bottom-0 right-0 translate-y-full rounded-bl-xl bg-yellow-500 p-2 text-xl"
        >
          {hidden ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
      <div className="content center h-full">{data[activeTab].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  data: PropTypes.array,
};

export default Tabs;
