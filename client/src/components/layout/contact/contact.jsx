import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="flex-item1">
        <h1>Get in touch</h1>

        <p>Please fill the below form to get in contact with us</p>

        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <textarea
            name="textarea"
            placeholder="Type your message"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="flex-item2">
        <div>
          <h1>Call Us</h1>
          <p>Call us for any inquery</p>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>061-123456</p>
          </div>
        </div>

        <div>
          <h1>Email Us</h1>
          <p>Email us for any inquery</p>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>visart@gmail.com</p>
          </div>
        </div>

        <div>
          <h1>Live Chat</h1>
          <p>Chat with our customer representative</p>
          <div>
            <i className="fa-solid fa-message"></i>
            <p>Start Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
