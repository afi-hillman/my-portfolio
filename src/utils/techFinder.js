import { techList } from "./techList";

const techFinder = (techName) => {
  return techList.find((item) => item.name === techName);
};

export default techFinder;
