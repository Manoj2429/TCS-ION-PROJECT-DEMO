import { useState } from "react";
import logoSlides from "../data/logos";
import Slide from "./Slide";
import Dots from "./Dots";
import "./Carousel.css";

const Carousel = () => {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(
  //     () => setActive((i) => (i + 1) % logoSlides.length),
  //     3500
  //   );
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <>
      <div className="carousel">
        <button
          className="nav left"
          onClick={() =>
            setActive((i) => (i === 0 ? logoSlides.length - 1 : i - 1))
          }
        >
          ‹
        </button>

        <Slide logos={logoSlides[active]} />

        <button
          className="nav right"
          onClick={() => setActive((i) => (i + 1) % logoSlides.length)}
        >
          ›
        </button>
      </div>

      <Dots total={logoSlides.length} active={active} />
    </>
  );
};

export default Carousel;
