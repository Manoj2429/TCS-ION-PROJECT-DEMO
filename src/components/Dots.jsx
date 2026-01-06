const Dots = ({ total, active }) => (
  <div className="dots">
    {Array.from({ length: total }).map((_, i) => (
      <span key={i} className={i === active ? "active" : ""} />
    ))}
  </div>
);

export default Dots;
