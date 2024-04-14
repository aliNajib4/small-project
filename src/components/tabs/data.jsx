import Accordion from "../accordion/Accordion";
import RandomColor from "../random_color/RandomColor";
import StarRating from "../star_rating/StarRating";

const data = [
  {
    label: "Tab 1",
    content: <Accordion />,
  },
  {
    label: "Tab 2",
    content: <RandomColor />,
  },
  {
    label: "Tab 3",
    content: <StarRating />,
  },
];

export default data;
