import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}

      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10rem",
         fontSize: "20px",
        }}
      >
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          {" "}
          <Link to="/login">Login</Link>
        </div>
        <div>
          {" "}
          <Link to="/createpost">Create Post</Link>
        </div>
        <div>
          {" "}
          <Link to="/allposts">All Posts</Link>
        </div>
      </div>
    </div>
  );
};

