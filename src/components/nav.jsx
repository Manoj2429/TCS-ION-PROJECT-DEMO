import "./nav.css";
function Nav() {
  const handleExplore = () => {
    document.getElementById("know-more").scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <>
       <div className="nav">
         <div className="nav-left">
          <img
            src=""
            alt="AIVQT"
            className="logo"
          />

          <div className="explore-btn">
             <a href=""> Explore▼</a>
          </div>
        </div>

        <div className="nav-center">
  <input
    type="search"
    placeholder="Search for courses and programs"
  />
  

        </div>

        <div className="nav-right">
          <a href="activate">Activate Code</a>
          <button className="login-btn">Login / Register</button>
        </div>
      </div>
      <div className="sub-nav">
        <a href="">Learners</a>
        <a href="">Institutions</a>
        <a href="">Resources</a>
        <a href="">Jobs</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </div>
          <div className="matter"
                  style={{
        backgroundImage:
          "url('https://www.tcsion.com/per/g01/pub/1016/iDH/instance/1/product/microsite_data/IONNQT17092020/microsite_1762165293047/image/placement-banner.webp?version=1228755482')",
      }}
    >
      <div className="description">
        <h1>AIVQT</h1><br></br>
         <h2>All India Virtual Qualifier Test</h2><br></br>

        <p>The launchpad to your dreams<br></br>

Test Date:

19th February, <br></br>2026
(For February Exam) <br></br>
Apply before:<br></br>

8th February, 2026
(For February Exam)</p>
        <button className="primary" onClick={handleExplore}>
            Explore Now
          </button>
          <a href="">View more details</a>
            </div>
            </div>
        <h1>Get more with AIVQT</h1>
      <div className="content">
         <div className="stat-box">
    <h3>1.6L+</h3>
    <p>Jobs for IT and non-IT domains</p>
  </div>

  <div className="stat-box">
    <h3>4000+</h3>
    <p>Corporates like TCS, TVS Motor, Jio Platform, Asian Paints and more</p>
  </div>

  <div className="stat-box">
    <h3>23+</h3>
    <p>Industries like IT, BFSI, FMCG, EdTech, and more</p>
  </div>

  <div className="stat-box">
    <h3>20+</h3>
    <p>
      IT Roles like Software Developers, Full Stack Developers,
      Cloud Engineers, and more
    </p>
  </div>

  <div className="stat-box">
    <h3>150+</h3>
    <p>
      non-IT Roles like Sales Executive, Business Analyst,
      HR Specialist, and more
    </p>
  </div>

  <div className="stat-box">
    <h3>10 LPA</h3>
    <p>highest salary package offered</p>
  </div>

      </div>
    </>
  );
}

export default Nav;