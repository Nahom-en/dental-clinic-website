"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
        const response = await fetch("/api/book-appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      
        if (!response.ok) throw new Error("Failed to submit. Please try again.");
      
        setSuccess(true);
        setFormData({
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          date: "",
          message: "",
        });
      } catch (err: any) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
  };

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-3xl font-semibold text-center mb-4">RESERVE A SPOT</h1>

        <div className="form-control">
          <label htmlFor="firstname" className="label"><span className="label-text">First Name</span></label>
          <input
            type="text"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastname" className="label"><span className="label-text">Last Name</span></label>
          <input
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="phonenumber" className="label"><span className="label-text">Phone Number</span></label>
          <input
            type="tel"
            id="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email" className="label"><span className="label-text">Email</span></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="date" className="label"><span className="label-text">Preferred Date</span></label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label htmlFor="message" className="label"><span className="label-text">Anything you want to tell us?</span></label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Your message here..."
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-[#2b2a65] text-white hover:bg-[#414073] focus:ring focus:ring-[#2b2a65] transition-colors duration-300"
          >
            {loading ? <span className="loading loading-bars loading-lg"></span> : "Submit"}
          </button>
        </div>

        {success && <p className="text-green-500 mt-2">Appointment booked successfully!</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
