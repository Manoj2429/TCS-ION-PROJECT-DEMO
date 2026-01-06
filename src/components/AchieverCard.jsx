const AchieverCard = ({ data }) => {
  return (
    <div className="achiever-card">
      {/* Top info */}
      <div className="card-body">
        <ul>
          <li>
            <strong>{data.degree}</strong>
            <div className="sub">Batch {data.batch}</div>
          </li>

          <li>
            <strong>Company Placed</strong>
            <div className="sub">{data.company}</div>
          </li>

          <li>
            <strong>Job Role</strong>
            <div className="sub">{data.role}</div>
          </li>

          <li>
            <strong>Salary</strong>
            <div className="sub">{data.salary}</div>
          </li>
        </ul>
      </div>

      {/* Profile footer */}
      <div className="card-footer">
        <img src={data.image} alt={data.name} />
        <div>
          <p className="name">{data.name}</p>
          <span>{data.location}</span>
        </div>
      </div>
    </div>
  );
};

export default AchieverCard;
