import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const BookingConfirmation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    roomNumber: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to console (replace with actual submission logic)
  };

  return (
    <div
      className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-lg my-16"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNzE1NTIxNjM5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Booking Confirmation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="filled"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="filled"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          variant="filled"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          id="address"
          name="address"
          label="Address"
          variant="filled"
          fullWidth
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          id="roomNumber"
          name="roomNumber"
          label="Room Number"
          variant="filled"
          fullWidth
          value={formData.roomNumber}
          onChange={handleChange}
        />
        <TextField
          id="guests"
          name="guests"
          label="Number of Guests"
          variant="filled"
          type="number"
          fullWidth
          value={formData.guests}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingConfirmation;
