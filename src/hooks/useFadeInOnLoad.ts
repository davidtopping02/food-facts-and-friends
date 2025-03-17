import { useSpring } from "react-spring";

const useFadeInOnLoad = (delay = 100, duration = 400) => {
  return useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay,
    config: { duration },
  });
};

export default useFadeInOnLoad;