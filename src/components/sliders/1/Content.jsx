import PorpTypes from "prop-types";

const Content = ({ name, job, desc, img, handleAnimation }) => {
  return (
    <div
      className={`relative flex max-w-[500px] items-center rounded-xl bg-white p-5 shadow-2xl ${handleAnimation ? "animate-fade_in_out" : ""}`}
    >
      <div className="profile min-w-[150px] p-3 text-center">
        <div className="img mx-auto mb-3 h-[100px] w-[100px] overflow-hidden rounded-3xl">
          <img className=" max-w-full " src={img} alt={name} />
        </div>
        <div className="desc text-center">
          <h3 className="name font-bold capitalize">{name}</h3>
          <p className="job text-xs">{job}</p>
        </div>
      </div>
      <div className="text shrink text-xs text-gray-400">{desc}</div>
    </div>
  );
};

Content.propTypes = {
  name: PorpTypes.string.isRequired,
  job: PorpTypes.string.isRequired,
  desc: PorpTypes.string.isRequired,
  img: PorpTypes.string.isRequired,
  handleAnimation: PorpTypes.bool.isRequired,
};

export default Content;
