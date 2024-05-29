import { TextField } from '@mui/material';
import React from 'react'

function FeedbackForm() {
    const handleSubmit = () => {
        const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
    
        console.log(formData);
      };
  return (
    <div>
    <div
    style={{
      backgroundImage:
        'url("https://source.unsplash.com/1600x900/?contact")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: 40,
      paddingBottom: 40,
      marginTop:30
    }}
  >
  <div className="bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:w-1/3 md:w-1/2">
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
  <button
    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    onClick={handleSubmit}
  >
    Submit
  </button>
  <p className="text-xs text-gray-500 mt-3">
    Chicharrones blog helvetica normcore iceland tousled brook viral
    artisan.
  </p>
</div>
  </div>
    </div>
  )
}

export default FeedbackForm