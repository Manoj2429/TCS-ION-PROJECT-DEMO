import Slider from "react-slick";
import "../styles/CareerBanner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
  {
    id: 1,
    title: "Take Charge of Your Career",
    description:
      "Get the best career advice, access limitless learning, appear for top quality tests, and grab exciting job opportunities with TCS iON Career Creator.",
    image : "/images/your-career-banner.webp",
    buttonText: "Explore More",
    buttonAction: () => {
      alert("Explore More Clicked");
    }
  }
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    ◀
  </div>
);

export default function CareerBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <section className="career-banner">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="career-slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay">
                <div className="text-wrap">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <button onClick={slide.buttonAction}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
