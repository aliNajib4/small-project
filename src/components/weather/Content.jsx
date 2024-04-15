import PropTypes from "prop-types";

const Content = ({
  name,
  sysCountry,
  temp,
  description,
  wind,
  humidity,
  date,
}) => {
  console.log(name, sysCountry, temp, description, wind, humidity, date);
  return (
    <div className="center flex-col gap-5">
      <div className="text-5xl font-bold">
        {name}, {sysCountry}
      </div>
      <div className="text-xl text-gray-700">{date}</div>
      <h1 className="text-9xl font-extrabold ">{temp}</h1>
      <div className="text-3xl text-gray-700">{description}</div>
      <footer className="center w-full justify-around">
        <div className="text-center text-3xl  font-semibold text-gray-700">
          <span className="block text-lg">{wind}</span> Wind
        </div>
        <div className="text-center text-3xl font-semibold text-gray-700">
          <span className="block text-lg">{humidity}%</span> Humidity
        </div>
      </footer>
    </div>
  );
};

Content.propTypes = {
  name: PropTypes.string,
  sysCountry: PropTypes.string,
  temp: PropTypes.number,
  description: PropTypes.string,
  wind: PropTypes.number,
  humidity: PropTypes.number,
  date: PropTypes.string,
};

export default Content;
