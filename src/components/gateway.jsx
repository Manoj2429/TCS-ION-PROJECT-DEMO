
import './gateway.css'

function Gateway() {
  

  return (
    <>
    <div className='gateWay_style'>
      <h2 style={{ backgroundColor: "white",padding: "20px 0",textAlign: "center",margin: 0 }}>AIVQT - Your Gateway to Thousands of Top Jobs</h2>

      <div className="card">
        <div id="img-stack">
          <img src="/image.png" className="image up" alt="TCS iON NQT" />
          <img src="/image1.png" className="image down" alt="TCS iON NQT" />
          <img src="/image2.png" className="image left" alt="TCS iON NQT" />
        </div>

        <div id="right-card">
          <p>
           AIVQT (AI Vision Qualifier Test) helps you demonstrate your skills to leading corporates. You can choose to be assessed in aptitude abilities, domain-specific knowledge, or work values. The test is conducted every 2–4 weeks at authorized exam centers. Your AIVQT Scorecard highlights your performance across each section of the assessment. Based on your score, you can apply for job opportunities with various corporates through our platform as well as the respective companies’ official websites.          </p>

          <h3>Who can Apply</h3>
          <ul>
             <li>Pre-final or final year students of any stream or degree</li>
            <li>Students passing between 2021-2027</li>
            <li>Working professionals with up to 2 years of experience</li>
          </ul>
          <button id="button-container">Get Started</button>
        </div>
      </div>
      <div className='sec-section'>
      <h2 style={{ backgroundColor:"#484848",padding: "20px 0",textAlign: "center",margin: 0,color:"white" }}>What Do You Get?</h2>
      <div className="sec">
        <div className="small-cards">
          <img src='/job_assistant.png' className='sec-logo' />
          <h4>Job Assistance</h4>
          <p>with a validity of 2 years</p>
        </div>

        <div className="small-cards">
         <img src='/score_card.png' className='sec-logo' />
          <h4>Scorecard</h4>
          <p>Free online learning course</p>
          <a href=''>View Sample Score →</a>
        </div>

        <div className="small-cards">
          <img src='/online_course.png' className='sec-logo'/>
          <h4>Free online learning course</h4>
          <p>Unlimited chances to enhance your score</p>
        </div>

        <div className="small-cards">
          <img src='/subscribe.png' className='sec-logo' />
          <h4>Resubscribe and improve</h4>
          <p>To crack the real test with ease</p>
        </div>
        
        <div className="small-cards">
          <img src='/test.png' className='sec-logo' />
          <h4>Free practice tests</h4>
          <p>To crack the real test with ease</p>
          <a href=''>Take a Sample Test →</a>

        </div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Gateway