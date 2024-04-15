import useFetch from "../../helpers/hooks/useFetch";
import { useState } from "react";
import Loading from "../Loading";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  const {
    data: { users },
    error,
    loading,
    errorMessage,
  } = useFetch(
    "https://dummyjson.com/users?select=firstName,maidenName,lastName",
  );
  const [suggestions, setSuggestions] = useState([]);

  const handleClick = (name) => {
    setSuggestions([]);
    setValue(name);
  };

  const handleChange = (value) => {
    const names = () => {
      const names = [];
      users.map(({ firstName, maidenName, lastName }) =>
        names.push(firstName, lastName, maidenName),
      );
      return names;
    };

    setValue(value);
    if (value.length > 0) {
      setSuggestions(
        names().filter((name) =>
          name.toLowerCase().startsWith(value.toLowerCase()),
        ),
      );
    } else {
      setSuggestions([]);
    }
  };

  if (loading) return <Loading />;
  if (error) return <h1>{errorMessage}</h1>;
  return (
    <div className="center w-full flex-col">
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="w-full">
        <ol className="grid-col-3 m-5 grid list-inside list-decimal p-5">
          {suggestions.map((suggestion, i) => (
            <li
              onClick={() => handleClick(suggestion)}
              key={i}
              className="cursor-pointer text-center hover:bg-gray-50"
            >
              {suggestion}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AutoComplete;
