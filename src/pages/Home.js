// import * as React from 'react';
// import { useState } from "react";

// const Home = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username} Password: ${password}`);
//   };

//   return (
//     <div class="tst">
//     <form onSubmit={handleSubmit} >
//       <label>
//         username:
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//       </label>
//       <div className="App">
//       </div>
//       <br />
//       <label>
//         password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <br></br>
//       <Link to="/about"><button type="submit">Login</button></Link>
//     </form>
//     </div>
//   );
// };

// export default Home;

import React from "react"
import { Link } from 'react-router-dom';


export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <Link to="/about" className="btn btn-primary">
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}