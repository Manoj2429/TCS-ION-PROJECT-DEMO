const Slide = ({ logos }) => (
  <ul className="corporatesWrap">
    {logos.map((logo, i) => (
      <li key={i}>
        <img src={logo.img} alt={logo.alt} title={logo.alt} />
      </li>
    ))}
  </ul>
);

export default Slide;
