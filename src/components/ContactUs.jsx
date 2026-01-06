import React from "react";
import "../styles/contactUs.css";

export default function ContactUs() {
  return (
    <section className="partnerContatct contact-us tcs-section" id="divContactUs">
      <div className="container-fluid tcs-custom-container p-0">
        <div className="row">
          <div className="col-sm-3">
            <div className="contact-lhs">
              <h2>Contact Us</h2>
              <p>For queries, feedback & assistance</p>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="contact-rhs">
              <ul className="cnt-email">
                <li>
                  <i className="cnt-icon">
                    {/* Email SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                      <path d="M17,15H1c-.55,0-1-.45-1-1V1C0,.45.45,0,1,0h16c.55,0,1,.45,1,1v13c0,.55-.45,1-1,1ZM11,7.14c-.28,0-.5.22-.5.5,0,.13.05.25.14.34l5.81,6.21c.19.2.51.2.71,0,.19-.19.2-.49.02-.69l-5.81-6.21c-.09-.1-.23-.16-.36-.16ZM6.78,7.14c-.14,0-.27.06-.37.16L.6,13.51c-.19.2-.19.51,0,.71.2.19.51.19.71,0,0,0,.01-.01.02-.02l5.81-6.2c.19-.2.18-.52-.02-.71-.09-.09-.21-.13-.34-.13h0ZM1.31.71c-.28,0-.5.22-.5.5,0,.16.07.31.2.4l7.69,5.72c.18.13.42.13.59,0l7.81-5.71c.22-.16.27-.48.11-.7,0,0,0,0,0,0-.09-.13-.24-.2-.4-.2-.11,0-.21.04-.29.1l-7.51,5.5L1.6.8c-.08-.06-.19-.09-.29-.09Z" fill="#4e84c4" strokeWidth="0"></path>
                    </svg>
                  </i>
                  <div className="cnt-text">
                    <p>Email</p>
                    <a href="mailto: helpdesk@aivqt.com" target="_top"> helpdesk@aivqt.com</a>
                  </div>
                </li>

                <li>
                  <i className="cnt-icon">
                    {/* Phone SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                      <path d="M17.61,10.82l-2.83-1.85c-.51-.42-1.24-.44-1.77-.04l-1.76,1.81c-.36.27-.84.3-1.23.08-.89-.43-1.73-.96-2.5-1.57-.83-.72-1.6-1.51-2.28-2.37-.26-.3-.22-.75.08-1.01,0,0,.01-.01.02-.02l1.56-1.82c.4-.32.46-.91.14-1.3-.05-.07-.12-.12-.18-.17L4.14.32c-.51-.42-1.24-.43-1.77-.04L0.77,1.62C0.12,2.13-0.15,2.99.09,3.78c.93,3.08,4.18,6.02,5.17,6.84,2.39,2.02,5.2,3.48,8.22,4.3.91.21,1.86,0,2.6-.57l1.58-2.05c.4-.32.46-.9.14-1.3-.05-.07-.12-.12-.18-.17Z" fill="#4e84c4" strokeWidth="0"></path>
                    </svg> 
                  </i>
                  <div className="cnt-text">
                    <p>CALL US (India Toll Free)</p>
                    <a href="tel:(080)45894589" target="_top">(080)45894589</a>
                  </div>
                </li>

                <li>
                  <i className="cnt-icon">
                    {/* Help Desk SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="25" fill="#2d72b9" />
                    </svg>
                  </i>
                  <div className="cnt-text">
                    <p>Help Desk</p>
                    <a href="javascript:void(0)" onClick={() => alert("Open ticket link")}>Click</a>
                    <span> to raise a ticket</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
