import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import data from "./data";
import { useState } from "react";

const Slider3 = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "LEFT") {
      setIndex(index > 0 ? index - 1 : data.length - 1);
    } else {
      setIndex(index < data.length - 1 ? index + 1 : 0);
    }
  };
  return (
    <div className="center h-screen w-screen select-none bg-yellow-400">
      <div className="relative max-w-[500px] rounded-xl bg-white p-3 ">
        <div className="arr -left-5" onClick={() => handleClick("LEFT")}>
          <FaArrowLeft />
        </div>
        <div className="img h-[300px] w-[300px] overflow-hidden rounded-lg">
          <img className="w-full" src={data[index]} alt="img in slider 3" />
        </div>
        <div className="arr -right-5" onClick={() => handleClick("RIGHT")}>
          <FaArrowRight />
        </div>
        <div className="dots absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-center gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-5 rounded-full border-2 border-yellow-500 ${index === i ? "bg-yellow-500" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider3;
