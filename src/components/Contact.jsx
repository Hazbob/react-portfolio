import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMarkEmailRead } from "react-icons/md";
import { Loader } from "@mantine/core";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [validInd, setValidInd] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    from_name: name,
    phone: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(value)) {
        setValidInd(false);
      } else {
        setValidInd(true);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      await emailjs.sendForm(
        "service_x65hglg",
        "template_piw578n",
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setLoading(false);
      setSent(true);
    } catch (err) {
      return (
        <h1>
          Uh oh! slight error, but im still hirable I promise. Refresh and try
          again :s
        </h1>
      );
    }
  }
  if (isLoading)
    return (
      <div className={"text-center my-40"}>
        <Loader color="blue" size={"xl"} />;
      </div>
    );

  if (sent) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md flex items-center gap-4">
        <MdMarkEmailRead size={"5em"} />
        <p>Thank you for the email, I will get back to you ASAP</p>
      </div>
    );
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
            className=" border  w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" border  w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            {validInd ? (
              <p>Email: </p>
            ) : (
              <p className={"text-red-600"}>Email: Must be valid email</p>
            )}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" border  w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            className=" border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
