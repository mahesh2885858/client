import React from "react";
import photo from "../components/mahesh.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info-container">
        <img src={photo} alt="my img" className="contact-img" />
        <div className="contact-info">
          <p>Phone: 987654321</p>
          <p>email: somerandom@gmail.com</p>
        </div>
      </div>
      <div className="feedback-container">
        <h3>Send Feedback</h3>
        <div className="feedback-input-container">
          <div className="input-area">
            <input
              type="text"
              autocomplete="off"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              autocomplete="off"
              placeholder="Enter Your Email"
            />
          </div>

          <textarea
            placeholder="enter your feedback"
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
