import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS
import { fadeIn } from '../../variants'; // Import your fadeIn variant

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false); // State to check if email is sent

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs
      .sendForm('service_f7w53lu', 'template_dtta4lf', e.target, 'Kn1nPqLjf96Sy4WGd')
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Set sent status to true
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            {"Let's"} <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* Success message */}
          {isSent && (
            <div className="text-green-500 mb-4">Your message has been sent successfully!</div>
          )}

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit} // Handle form submission
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={handleChange}
                className='input'
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className='input'
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              value={formData.subject}
              onChange={handleChange}
              className='input'
            />
            <textarea
              name='message'
              placeholder='message'
              value={formData.message}
              onChange={handleChange}
              className='textarea'
            ></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Lets talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
