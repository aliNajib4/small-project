import { TERipple } from "tw-elements-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ img, title, desc, URL }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      {img && (
        <TERipple className="w-[150px]">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="w-full rounded-t-lg" src={img} alt="" />
            <Link to={URL}>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </Link>
          </div>
        </TERipple>
      )}
      <div className="p-6">
        {title && (
          <h5 className="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
        )}
        {desc && (
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  URL: PropTypes.string,
};

export default Card;
