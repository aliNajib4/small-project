import { useRef } from "react";
import useFetch from "../../helpers/hooks/useFetch";
import Loading from "../Loading";

const ScrollToTopAndBottom = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const bottomRef = useRef(null);

  if (loading) <Loading />;
  return (
    <div className="center flex-col gap-5 p-5 px-0 sm:px-20 ">
      <button
        className="button"
        onClick={() => bottomRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll To Bottom
      </button>
      <div className="lorem-data">
        {data.map((item) => (
          <p key={item.id}>{item.body}</p>
        ))}
      </div>
      <button
        className="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Scroll To Top
      </button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ScrollToTopAndBottom;
