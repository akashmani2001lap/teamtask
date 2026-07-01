import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // Don't generate OTP again if already registered
    if (!localStorage.getItem("otp")) {
      const generatedOtp = Math.floor(
        100000 + Math.random() * 900000,
      ).toString();

      localStorage.setItem("otp", generatedOtp);
    }

    localStorage.setItem("userEmail", email);

    alert("Registration Successful! For OTP see Local Storage");

    setShowOtp(true);
  };

  const handleVerify = () => {
    const storedOtp = localStorage.getItem("otp");

    console.log("Entered OTP :", otp);
    console.log("Stored OTP :", storedOtp);

    if (otp.trim() === storedOtp) {
      localStorage.setItem("isLoggedIn", "true");

      alert("OTP Verified Successfully");

      navigate("/home");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          JS Learning App
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Register to Continue
        </p>

        <form onSubmit={handleRegister}>
          <label className="font-semibold">Email Address</label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            disabled={showOtp}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2 mb-5 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />

          {!showOtp && (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 duration-300"
            >
              Register
            </button>
          )}
        </form>

        {showOtp && (
          <div>
            <label className="font-semibold">Enter OTP</label>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-lg p-3 mt-2 mb-5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleVerify}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 duration-300"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
