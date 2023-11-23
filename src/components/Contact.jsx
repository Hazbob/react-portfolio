import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { Loader, Button } from "@mantine/core";
import { handleChange, handleSubmit } from "../utils/contactHandlers.jsx";
import { FaHouse } from "react-icons/fa6";

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
  let location = useLocation();

  const form = useRef();

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
    <div
      className={
        "flex flex-col gap-4 w-screen h-screen items-center justify-center"
      }
    >
      <Link to={"/"}>
        <button
          className={
            "border-2 border-emerald-300 p-3 text-emerald-300 flex flex-col justify-center items-center rounded-md hover:bg-emerald-300 hover:text-white transition duration-300: "
          }
        >
          <FaHouse size={"2em"} />
          <p>Home</p>
        </button>
      </Link>
      <div className="w-5/6 md:w-2/3 mx-auto bg-white p-6 rounded-md shadow-md h-fit  ">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>

        <form
          ref={form}
          onSubmit={(e) =>
            handleSubmit(e, setLoading, setSent, setFormData, form)
          }
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(event) =>
                handleChange(event, setValidInd, setFormData)
              }
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
              onChange={(event) =>
                handleChange(event, setValidInd, setFormData)
              }
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
              onChange={(event) =>
                handleChange(event, setValidInd, setFormData)
              }
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
              onChange={(event) =>
                handleChange(event, setValidInd, setFormData)
              }
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
    </div>
  );
};

export default Contact;
