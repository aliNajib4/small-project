import { useEffect, useRef, useState } from "react";
import useFetch from "../../helpers/hooks/useFetch";

const ScrollIndicator = () => {
  const { data } = useFetch(
    "https://dummyjson.com/products?limit=100&select=title",
  );
  const main = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = main.current?.offsetHeight - (window?.innerHeight || 0);
      const scroll = window.scrollY;

      setValue((scroll / height) * 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div
        ref={main}
        className="scroll-indicator absolute top-0 min-h-screen w-screen bg-cyan-300"
      >
        <header className="header center sticky left-0 top-0 w-screen flex-col bg-green-400 py-3">
          <h1 className="mb-3 text-2xl font-bold ">ScrollIndicator</h1>
          <progress value={value} max={100} className="h-2 w-full" />
        </header>
        <main>
          <ul className="list m-5 list-decimal p-5">
            {data?.products?.map(({ title, id }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default ScrollIndicator;
