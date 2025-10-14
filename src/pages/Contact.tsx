import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: contactEmail
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <hr />
      <br />
      <h2>Send Me a Message</h2>
      <p>Fill out the form below to send me a message:</p>
      <br />
      
      {isSubmitted ? (
        <div className="bg-green-300 text-green-900 px-4 py-3 rounded-lg mb-4 max-w-2xl">
          <p className="text-green-900">Thank you for your message! I'll get back to you soon.</p>
        </div>
      ) : showError ? (
        <div className="bg-red-300 text-red-900 px-4 py-3 rounded-lg mb-4 max-w-2xl">
          <p className="text-red-900">Sorry, there was an error sending your message. Please try again.</p>
          <button 
            onClick={() => setShowError(false)}
            className="mt-2 text-sm underline hover:no-underline text-red-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE9920] focus:border-transparent text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE9920] focus:border-transparent text-black"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE9920] focus:border-transparent text-black"
              placeholder="Enter email subject"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE9920] focus:border-transparent resize-vertical text-black"
              placeholder="Type your message here..."
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-[#FE9920] hover:bg-[#DCDCDD] disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
      <br />
      <h2>Other Contact Information</h2>
      <h3>LinkedIn</h3>
      <a 
        href="https://www.linkedin.com/in/andrew-mack-492375360"
        className="text-[#FE9920] hover:text-[#DCDCDD] transition-colors duration-200"
      >
        https://www.linkedin.com/in/andrew-mack-492375360
      </a>
      <h3>Instagram</h3>
      <a 
        href="https://www.instagram.com/a.mack727"
        className="text-[#FE9920] hover:text-[#DCDCDD] transition-colors duration-200"
      >
        https://www.instagram.com/a.mack727
      </a>
      <br />
    </>
  );
}
