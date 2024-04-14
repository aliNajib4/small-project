import PropTypes from "prop-types";
import Loading from "../Loading";

const User = ({ data, loading }) => {
  const {
    avatar_url = "https://placehold.co/64",
    followers = "defult",
    following = "defult",
    public_repos = "defult",
    name = "defult",
    login = "defult",
    created_at = "0000-00-00",
  } = data || {};
  return (
    <div className="center mt-5 flex-col rounded-2xl border-2 border-black p-3">
      {loading ? (
        <Loading />
      ) : (
        <>
          <img src={avatar_url} alt="" className="w-16 rounded-full border" />
          <h1>name: {JSON.stringify(name)}</h1>
          <p>login: {JSON.stringify(login)}</p>
          <p>followers: {JSON.stringify(followers)}</p>
          <p>following: {JSON.stringify(following)}</p>
          <p>public_repos: {JSON.stringify(public_repos)}</p>
          <p>
            created_at: {JSON.stringify(created_at).match(/\d{4}-\d{2}-\d{2}/g)}
          </p>
        </>
      )}
    </div>
  );
};

User.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
