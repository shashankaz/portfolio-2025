"use client";

import Link from "next/link";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-4 md:pt-8 pb-16 min-h-screen">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          className="py-2 border-b border-black focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          className="py-2 border-b border-black focus:outline-none"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="py-2 border-b border-black focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message*"
          rows={5}
          className="py-2 border-b border-black focus:outline-none resize-none"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 py-2 border border-black rounded-lg shadow-[3px_3px] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>

      <div className="flex items-center justify-center gap-2 my-8">
        <div className="h-[1px] w-full bg-black flex-1"></div>
        <p>or drop a mail at</p>
        <div className="h-[1px] w-full bg-black flex-1"></div>
      </div>

      <div className="text-center">
        <Link
          href="mailto:shashankstories@gmail.com"
          className="hover:text-blue-500"
        >
          shashankstories@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Contact;
