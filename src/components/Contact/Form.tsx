import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  phone: string;
  message: string;
}

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const validate = () => {
    const newErrors = { username: "", email: "", phone: "", msg: "" };

    if (!formData.username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.msg.trim()) {
      newErrors.msg = "Message is required";
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
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <div className="content sec-padding">
        <h6 className="uppercase text-center font-[700] text-3xl mb-5">
          Get in to Touch
        </h6>

        <p className="text-justify mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur in
          unde laudantium quis, nostrum iusto quas deserunt blanditiis quaerat
          tenetur natus ab nihil. Illo iste est temporibus rem adipisci eos
          quasi dolor exercitationem quod aperiam totam natus at, inventore
          molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam assumenda eos, suscipit illo ratione tempore exercitationem
          explicabo odit quam molestiae quaerat officiis. Ratione incidunt
          voluptatum, ipsum explicabo ducimus minus reiciendis nam inventore
          culpa id maiores voluptate! Eos quo rem eligendi!
        </p>

        <div className="contact_form bg-light_white w-full flex items-center justify-center max-lg:flex-col p-5 max-md:py-10 rounded-t-lg">
          <div className="w-3/6 max-lg:w-full">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <img
                src="/contact_form_photo.jpg"
                alt="footer-photo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="w-3/6 max-lg:w-full">
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
                  {errors.username && (
                    <p className="text-error_clr">{errors.username}</p>
                  )}
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
                  {errors.email && (
                    <p className="text-error_clr">{errors.email}</p>
                  )}
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
                  {errors.phone && (
                    <p className="text-error_clr">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-5 max-md:mb-1">
                  <label className="text-white"></label>
                  <textarea
                    name="msg"
                    className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                    placeholder="Message"
                    cols={20}
                    rows={4}
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
        </div>

        <div className="bg-light_white p-5 mt-5 flex max-lg:flex-col max-lg:py-10 rounded-b-lg">

          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <div className="imgs w-[300px] max-lg:w-full">
              <img src="/location.jpg" alt="laction - img" className="w-full" />
            </div>
          </div>

          <div className="w-4/5 max-lg:w-full flex justify-center flex-col gap-5">
            <h6 className="font-[700] text-3xl uppercase text-center">
              Our Location
            </h6>
            <div className="flex items-center gap-10 justify-center">
              <img src="/map-icon.png" alt="icon" className="w-[50px]" />
              <div>
                <p className="mb-3">
                  Periya Koladi Rd, Konrajakuppam, Ayappakkam, Chennai-600 095
                  Tamil Nadu, India.
                </p>
                <a href="#" className="text-[blue] underline underline-offset-1">
                  Periya Koladi Rd, Konrajakuppam, Ayappakkam, Chennai-600 095
                  Tamil Nadu, India.
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Form;
