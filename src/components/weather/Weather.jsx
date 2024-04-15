import { useState } from "react";
import useFetch from "../../helpers/hooks/useFetch";
import Loading from "../Loading";
import Content from "./Content";

const Weather = () => {
  const [search, setSearch] = useState("egypt");
  const [value, setValue] = useState("");
  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=407ddd810c07faab8a960dda8983c9f6`,
  );
  console.log(data.name);

  const handleSearch = (value) => {
    setSearch(value);
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="weather center h-screen w-screen flex-col p-20">
      <div className="center w-full flex-col gap-5 rounded-[32px] bg-teal-500 px-10 py-10">
        <div className="flex w-full gap-5">
          <input
            value={value}
            type="text"
            placeholder="Enter city"
            onChange={(e) => setValue(e.target.value)}
            className="grow"
            spellCheck="false"
          />
          <button
            onClick={() => handleSearch(value)}
            className="button bg-emerald-500 duration-200 hover:bg-emerald-600"
          >
            Search
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <p>this city not found</p>
        ) : (
          <Content
            name={data.name}
            sysCountry={data?.sys?.country}
            temp={data.main.temp}
            description={data.weather[0].description}
            wind={data.wind.speed}
            humidity={data.main.humidity}
            date={getCurrentDate()}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
