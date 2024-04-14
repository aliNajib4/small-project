import useFetch from "../../helpers/hooks/useFetch";
import { useState } from "react";
import User from "./User";

const GithubProfile = () => {
  const [value, setValue] = useState("alinajib4");
  const [userName, setUserName] = useState("alinajib4");
  const [url, setUrl] = useState(`https://api.github.com/users/${userName}`);
  const { data, error, loading } = useFetch(url);

  const handleSearch = () => {
    setUrl(`https://api.github.com/users/${value}`);
    setUserName(value);
  };
  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="rounded-full rounded-r-none border-2 border-r-0 border-black bg-gray-300 p-1 pl-3 text-black focus:outline-none"
      />
      <button onClick={() => handleSearch()} className="button rounded-l-none">
        Search
      </button>
      <div className="content">
        <User
          data={error || loading || data.length === 0 ? {} : data}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default GithubProfile;
