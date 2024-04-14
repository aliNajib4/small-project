import Card from "../../helpers/units/Card";

const Sliders = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card img="/public/vite.svg" title="slider 1" URL="/sliders/1" />
      <Card img="/public/vite.svg" title="slider 2" URL="/sliders/2" />
      <Card img="/public/vite.svg" title="slider 3" URL="/sliders/3" />
    </div>
  );
};

export default Sliders;
/*Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <TERipple></TERipple>*/
