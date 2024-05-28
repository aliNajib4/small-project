import data from "./data";
import Card from "./Card";

const Home = () => {
  console.log(data);
  return (
    <div className="m-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ name, decsription, path, image }) => (
        <Card
          key={name}
          title={name}
          desc={decsription}
          URL={path}
          img={image}
        />
      ))}
    </div>
  );
};

export default Home;
