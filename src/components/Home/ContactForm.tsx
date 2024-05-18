import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface FormData {
  username: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    msg: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    msg: ''
  });  

  const validate = () => {
    const newErrors = {username: "", email: "", phone: "", msg: ""};

    if (!formData.username.trim()) {
      newErrors.username = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.msg.trim()) {
      newErrors.msg = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };
  

  return (
    <div className="flex w-full max-md:flex-col sec-padding bg-light_white">
      <div className="w-full max-md:order-2">
        <h2 className="text-center font-bold text-[30px] uppercase">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 p-5 max-md:p-0">
            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="fName"
                type="text"
                className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Name"
                name="username"
                autoComplete="off"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="text-error_clr">{errors.username}</p>}
            </div>

            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="yEmail"
                type="email"
                className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-error_clr">{errors.email}</p>}
            </div>

            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="phNumber"
                type="text"
                className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Contact Number"
                name="phone"
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-error_clr">{errors.phone}</p>}
            </div>

            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <textarea
                name="msg"
                className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Message"
                cols={20}
                rows={5}
                autoComplete="off"
                value={formData.msg}
                onChange={handleChange}
              ></textarea>
              {errors.msg && <p className="text-error_clr">{errors.msg}</p>}
            </div>
            <div className="text-center block">
              <button
                type="submit"
                className="btn bg-primary text-white rounded-full max-md:rounded-lg w-1/4 p-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full max-md:mb-10">
        <LazyLoadImage className="rounded-3xl max-lg:mt-20" src="/contact.webp" alt="Contact" effect="blur" />
      </div>
    </div>
  );
};

export default ContactForm;
