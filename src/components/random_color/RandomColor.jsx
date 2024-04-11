import { useState } from "react";
const getRandomColorHSX = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);
const toRGB = (hex) => {
  return `rgb(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)})`;
};
const RandomColor = () => {
  const [enableRGB, setEnableRGB] = useState(false);
  const [color, setColor] = useState(getRandomColorHSX());
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-between py-12"
      style={{ backgroundColor: color }}
    >
      <ul className="flex gap-4">
        <li>
          <button className="button" onClick={() => setEnableRGB(false)}>
            create HEX color
          </button>
        </li>
        <li>
          <button className="button" onClick={() => setEnableRGB(true)}>
            create RGB color
          </button>
        </li>
        <li>
          <button
            className="button"
            onClick={() => setColor(getRandomColorHSX())}
          >
            generate random color
          </button>
        </li>
      </ul>
      <h1 className="title text-6xl capitalize">{enableRGB ? "RGB" : "HEX"} color</h1>
      <p className="text text-4xl">{enableRGB ? toRGB(color) : color}</p>
    </div>
  );
};

export default RandomColor;
