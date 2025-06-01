import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  if (isSignup && name.trim().length < 2) {
    alert("Please enter a valid name.");
    return;
  }

  // ✅ Store login status in localStorage
  localStorage.setItem("isLoggedIn", "true");

  // ✅ Navigate to home
  navigate("/");
};


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-red-500 bg-opacity-20 backdrop-blur-md border border-red-300 shadow-[0_0_30px_rgba(255,0,0,0.4)] rounded-3xl p-10 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-md">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <div>
              <label className="text-sm text-white block mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-white block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-white/70 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="cursor-pointer text-red-400 underline hover:text-red-300"
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
