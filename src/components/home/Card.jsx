import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ img, title, desc, URL }) => {
  return (
    <Link to={URL ? URL : "/"}>
      <div
        className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-lg border bg-gray-100 bg-cover bg-center p-3 shadow-md duration-200 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,.25)_100%)] before:opacity-50 before:duration-200 hover:scale-110 hover:shadow-sm hover:before:opacity-25 dark:bg-neutral-700"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="relative z-10 rounded-xl bg-white p-2 opacity-0 duration-200 group-hover:opacity-65">
          <h3 className="font-bold capitalize">{title}</h3>
          <p className="ml-2 text-xs">{desc && desc}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  URL: PropTypes.string.isRequired,
};

export default Card;
