"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import TextField from "@mui/material/TextField";

function Searchbar() {
  const [username, setUserName] = React.useState("");

  function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username);
  }

  return (
    <form onSubmit={handlesubmit} className="flex items-center space-x-2 p-5">
      <TextField
        id="dark-mode-search"
        label="Github username"
        variant="outlined"
        color="info"
        value={username}
        required={true}
        onChange={(e) => setUserName(e.target.value)}
        slotProps={{
          input: {
            style: { color: "white" }, // Input text color
          },
          inputLabel: {
            style: { color: "gray" },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "white", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb", // Border color when focused
            },
          },
        }}
      />
      <button
        type="submit"
        className="text-white bg-transparent hover:text-blue-600  p-2 rounded-full transition-all duration-300"
      >
        <FaSearch size={20} />
      </button>
    </form>
  );
}

export default Searchbar;
