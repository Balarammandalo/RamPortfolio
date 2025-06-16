// import React from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

const Contact = () => {
  const code ="aa115589-b53a-4fc5-a5b7-234f3eaac1c7"
  
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", `${code}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      event.target.reset();
    }else {
      toast.error('Something went wrong. Please try again.');
    }
  };


  return (
    <div className='contact'>
      <ToastContainer  position="top-right" autoClose={3000}/>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <div className="footer">
            <h2>Contact Me</h2>
            <div className="footer-row">
              <a
                href="https://github.com/Balarammandalo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-box"
              >
                <FaGithub className="icon" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/balaram-mandalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-box"
              >
                <FaLinkedin className="icon" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:balarammandalo147@gmail.com" className="footer-box">
                <MdEmail className="icon" />
                <span>Email</span>
              </a>
              <div className="footer-box">
                <FaPhoneAlt className="icon" />
                <span>+91 7750983362</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmitForm} >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />

            <label htmlFor="message">Write Your Message Here</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows={4}
            ></textarea>

            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
