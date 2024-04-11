import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import data from "./data";
import { useState } from "react";

function Accordion() {
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);
  const [select, setSelect] = useState(null);
  const handleSingleSelection = (id) => {
    setSelect((state) => (state === id ? null : id));
  };
  const handleMultiSelection = (id) => {
    let newMulti = [...multi];
    const index = newMulti.indexOf(id);
    if (index === -1) {
      newMulti.push(id);
    } else {
      newMulti.splice(index, 1);
    }
    setMulti(newMulti);
  };
  const handleEnableMulti = (value) => {
    setEnableMulti(value);
    setMulti([]);
    setSelect(null);
  };
  return (
    <div className="accordion flex w-[375px] flex-col items-center gap-4 font-mono text-[12px] text-slate-800">
      <header>
        <button
          onClick={() => handleEnableMulti(!enableMulti)}
          className={`title flex items-center gap-2 rounded-md bg-amber-400 p-2 outline ${enableMulti ? "outline-1" : "outline-0"}`}
        >
          enable multi selection{" "}
          <span className="">
            {enableMulti ? (
              <FaCirclePause size="14px" color="#dc2626" />
            ) : (
              <FaCirclePlay size="14px" color="#22c55e" />
            )}
          </span>
        </button>
      </header>
      <ul>
        {data.map(({ Q, A, id }) => (
          <li
            key={id}
            className={`mb-2 overflow-hidden  rounded-md bg-amber-500 outline-dashed outline-2 outline-amber-600 ${select === id ? "outline-2" : "outline-0"}`}
          >
            <div
              className="q flex cursor-pointer select-none justify-between p-2"
              onClick={() =>
                enableMulti
                  ? handleMultiSelection(id)
                  : handleSingleSelection(id)
              }
            >
              <h3>{Q}</h3>
              {select === id ? <FaMinus /> : <FaPlus />}
            </div>
            <p
              className={`a ${enableMulti ? (multi.includes(id) ? "block" : "hidden") : select === id ? "block" : "hidden"} bg-amber-600 p-2 pt-0`}
            >
              {A}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
