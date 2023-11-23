import emailjs from "@emailjs/browser";
import React from "react";

export async function handleSubmit(e, setLoading, setSent, setFormData, form) {
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

export function handleChange(e, setValidInd, setFormData) {
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
}
