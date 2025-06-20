import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="title">Get in <span className="highlight">Touch</span></h1>
        <p className="subtitle">Have a project in mind? Let's talk about it.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to me any time. I prefer to talk over email, especially for project inquiries.</p>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FiPhone />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+90 555 123 4567</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FiMail />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>aabraham.james@example.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin />
            </div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
          
          <div className="availability">
            <h3>Availability</h3>
            <p>I'm currently available for freelance work or full-time positions. If you're interested in working together, please get in touch.</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          {formSubmitted ? (
            <div className="form-success">
              <FiSend size={40} />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  className="form-control"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <FiSend /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;