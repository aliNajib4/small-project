import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Content from "./Content";
import data from "./data";
import { useState } from "react";

const Slider1 = () => {
  const [index, setIndex] = useState(0);
  const [handleAnimation, setHandleAnimation] = useState(false);

  const handleClick = (direction) => {
    setHandleAnimation(true);
    setTimeout(() => {
      if (direction === "LEFT") {
        setIndex(index > 0 ? index - 1 : data.length - 1);
      } else {
        setIndex(index < data.length - 1 ? index + 1 : 0);
      }
      setTimeout(() => {
        setHandleAnimation(false);
      }, 250);
    }, 250);
  };
  return (
    <div className="center h-screen w-screen bg-indigo-600">
      <div className="relative max-w-[500px] rounded-xl bg-white">
        <div className="arr -left-5">
          <FaArrowLeft onClick={() => handleClick("LEFT")} />
        </div>
        <Content
          name={data[index].name}
          job={data[index].job}
          desc={data[index].desc}
          img={data[index].img}
          handleAnimation={handleAnimation}
        />
        <div className="arr -right-5">
          <FaArrowRight onClick={() => handleClick("RIGHT")} />
        </div>
      </div>
    </div>
  );
};

export default Slider1;
