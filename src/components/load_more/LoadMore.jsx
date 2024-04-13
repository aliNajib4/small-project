import { useEffect, useState } from "react";
import useFetch from "../../helpers/hooks/useFetch";

const LoadMore = () => {
  const STEP = 50;
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products?limit=${STEP}&skip=${skip}&select=title,price,id,images,description`,
  );
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (data) {
      setResult((result) => [...result, ...(data.products || [])]);
    }
  }, [data]);

  const handleMore = () => {
    const nextSkip = skip + STEP;
    setSkip(nextSkip);
    if (!(nextSkip >= 100)) setLoadMore(false);
  };

  if (error) throw new Error("error");
  return (
    <div className="absolute top-0 p-5">
      {loading && <p>loading ...</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
        {result &&
          result?.map(({ description, price, id, images, title }, index) => (
            <div
              key={id}
              className="card relative flex h-[250px] flex-col rounded-xl border-2 border-black p-3 shadow-[0_5px_0_0_#000] duration-500 hover:shadow-te-primary"
            >
              <div className="img w-fullcenter h-[100px]">
                <img
                  loading="lazy"
                  src={images[0]}
                  alt="img in load more"
                  className="max-h-full w-full rounded-lg border-2 border-gray-200 object-cover object-top"
                />
              </div>
              <div className="desc flex grow flex-col justify-evenly">
                <div
                  title={title}
                  className="line-clamp-1 text-xl font-extrabold "
                >
                  {title}
                </div>
                <div
                  title={description}
                  className="line-clamp-2 text-[14px] text-gray-600 "
                >
                  {description}
                </div>
              </div>
              <footer className="flex items-center justify-between">
                <div className="price text-sm ">${price}</div>
                <button className="text-md rounded-lg border border-black bg-amber-500 px-3 py-1 font-semibold capitalize text-white shadow-[0_1px_0_0_#000] duration-500 hover:shadow-none ">
                  add to cart
                </button>
              </footer>
              <div className="index arr  -right-2 top-0 -translate-y-1/2 cursor-default p-1 text-xs">
                i: {index}
              </div>
              <div className="id arr -left-2 top-0 -translate-y-1/2 cursor-default p-1 text-xs">
                id: {id}
              </div>
            </div>
          ))}
      </div>
      <button
        className="button mx-auto my-5 block shadow-[0_1px_0_0_#000] duration-500 hover:shadow-none"
        onClick={() => handleMore()}
        disabled={!loadMore}
      >
        {loadMore
          ? `Load More (skip items ${skip} to ${skip + STEP})`
          : "no More"}
      </button>
    </div>
  );
};
export default LoadMore;

//
