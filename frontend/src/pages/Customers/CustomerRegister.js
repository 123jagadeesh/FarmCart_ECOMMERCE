// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const ConsumerRegister = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen space-y-4">
// //       <h1 className="text-2xl font-bold">Consumer Registration</h1>
// //       <form className="flex flex-col space-y-3">
// //         <input type="text" placeholder="Full Name" className="p-2 border" />
// //         <input type="text" placeholder="Address" className="p-2 border" />
// //         <input type="text" placeholder="Mobile" className="p-2 border" />
// //         <input type="text" placeholder="Payment Details" className="p-2 border" />
// //         <button className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
// //       </form>
// //       <p>
// //         Already have an account?{" "}
// //         <span
// //           className="text-blue-500 cursor-pointer"
// //           onClick={() => navigate("/consumer-login")}
// //         >
// //           Login here
// //         </span>
// //       </p>
// //     </div>
// //   );
// // };

// // export default ConsumerRegister;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ConsumerRegister = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     alert("Registration Successful! Please login.");
//     navigate("/consumer-login"); // Redirect to Farmer Login
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl font-bold mb-4">Farmer Register</h2>
//       <form onSubmit={handleRegister} className="flex flex-col space-y-4">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 rounded-lg"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded-lg"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 rounded-lg"
//           required
//         />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ConsumerRegister;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Consumer Registered Successfully!");
    navigate("/consumer-login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Consumer Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-lg" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded-lg" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
};

export default CustomerRegister;
