"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dineform = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    noOfGuests: "",
    message: "",
    date: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ======================
     INPUT CHANGE HANDLER
  ====================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow ONLY digits & max 10
    if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) return; // block text
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error instantly for this field
    setFormErrors((prev) => ({
      ...prev,
      [name === "fullname"
        ? "name"
        : name === "phoneNumber"
        ? "phone"
        : name === "noOfGuests"
        ? "guests"
        : name]: "",
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));

    setFormErrors((prev) => ({ ...prev, date: "" }));
  };

  /* ======================
        VALIDATION
  ====================== */
  const validateForm = () => {
    const errors = {};
    const { fullname, phoneNumber, email, noOfGuests, date } = formData;

    if (!fullname || /[0-9]/.test(fullname)) {
      errors.name = "Name is required and cannot contain numbers.";
    }

    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (
      !email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (!noOfGuests || Number(noOfGuests) <= 0) {
      errors.guests = "Number of guests must be greater than 0.";
    }

    if (!date) {
      errors.date = "Please select a date.";
    }

    return errors;
  };

  /* ======================
        SUBMIT
  ====================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateForm();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const endpoint =
        "https://script.google.com/macros/s/AKfycbxeIDnV-GWW8AApvq6biDLbAby6wut4Ryifqtk3zbdM_IhYVARYKhXV7mj5urG1aPWFMw/exec";

      const fd = new FormData(e.currentTarget);
      fd.set(
        "date",
        formData.date
          ? formData.date.toLocaleDateString("en-GB")
          : ""
      );
      fd.append("querydate", new Date().toISOString().split("T")[0]);

      const res = await fetch(endpoint, { method: "POST", body: fd });
      const data = await res.json();

      if (data?.result === "success") {
        window.open("/thankyou", "_blank");
        e.currentTarget.reset();
        setFormData({
          fullname: "",
          phoneNumber: "",
          email: "",
          noOfGuests: "",
          message: "",
          date: null,
        });
        setFormErrors({});
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      alert("Submission error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dine-form">
      <form onSubmit={handleSubmit}>
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full border p-2 text-sm"
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">Phone</label>
            <input
              type="number"
              name="phoneNumber"
              inputMode="numeric"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full border p-2 text-sm"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-xs">{formErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Email + Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 text-sm"
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">Select Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
              className="w-full border p-2 text-sm"
              onKeyDown={(e) => e.preventDefault()}
            />
            {formErrors.date && (
              <p className="text-red-500 text-xs">{formErrors.date}</p>
            )}
          </div>
        </div>

        {/* Guests */}
        <div className="mb-3">
          <label className="text-sm font-semibold">No of Guests</label>
          <input
            type="number"
            name="noOfGuests"
            value={formData.noOfGuests}
            onChange={handleChange}
            className="w-full border p-2 text-sm"
          />
          {formErrors.guests && (
            <p className="text-red-500 text-xs">{formErrors.guests}</p>
          )}
        </div>

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          placeholder="Message"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary-600 text-white px-6 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Dineform;
