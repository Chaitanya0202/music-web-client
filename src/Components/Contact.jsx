import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';
const MusicPlayer = () => {
  const handleSubmit = async() => {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/saveUser', formData);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  return (
    <>
      <section
        className="text-gray-600 body-font relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=840&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29udGFjdHx8fHx8fDE3MTU1MjEzMTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=550")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-1 py-24 mx-auto flex flex-col sm:flex-row">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 pt-96 p-10 flex items-end justify-start relative h-auto">
            <iframe
              title="map"
              className="w-full h-full absolute inset-0 mx-1"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121095.06699530903!2d73.93018077189211!3d18.47365317184678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9fbb7004d75%3A0x47e210ff46b857f!2sKale%20Padal%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1715424491794!5m2!1sen!2sin"
              style={{ filter: 'grayscale(0.1) contrast(1.2) opacity(0.4)' }}
            ></iframe>

            <div className="bg-slate-200 relative flex flex-wrap py-6 rounded shadow-md mx-2">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Kale Padal Hadapsar, Pune, Maharashtra 411028
                  <div class="text-center">
                    <a
                      href="#"
                      class="font-sans  inline-block text-blue-400 underline hover:text-blue-600  font-bold py-2 px-4 rounded"
                    >
                      website
                    </a>
                  </div>
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 ">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:example@email.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  chetanchavan8197@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">7767973361</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:mr-0 lg:ml-auto md:mx-30 mx-10">
            <h2 className="leading-relaxed text-white font-bold font-roboto text-lg mb-1 title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-white font-bold text-lg font-roboto">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <TextField
                id="name"
                label="Name"
                variant="filled"
                fullWidth
                className="mb-4"
                sx={{
                  fontSize: 90,
                  fontWeight: "bold",
                  "& .MuiInputLabel-root": { color: "white" },

                  "& .MuiInputBase-input": {
                    fontSize: "20px",
                    color: "whitesmoke",
                  },
                }}
              />
            </div>
            <div className="relative mb-4">
              <TextField
                id="email"
                label="Email"
                variant="filled"
                fullWidth
                className="mb-4"
                sx={{
                  fontSize: 90,
                  fontWeight: "bold",
                  "& .MuiInputLabel-root": { color: "white" },

                  "& .MuiInputBase-input": {
                    fontSize: "20px",
                    color: "whitesmoke",
                  },
                }}
              />
            </div>
            <div className="relative mb-4">
              <TextField
                id="message"
                label="Message"
                variant="filled"
                fullWidth
                multiline
                rows={4}
                className="mb-4"
                sx={{
                  fontSize: 90,
                  fontWeight: "bold",
                  "& .MuiInputLabel-root": { color: "white" },

                  "& .MuiInputBase-input": {
                    fontSize: "20px",
                    color: "whitesmoke",
                  },
                }}
              />
            </div>
            <Button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" variant="contained" color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
          ;
        </div>
      </section>
    </>
  );
};

export default MusicPlayer;
