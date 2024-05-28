"use client";

import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function LoginForm() {
  // Login POST request
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    setLoading(true);
    await delay(1000);
    router.push(email.split("@")[1].replaceAll(".", "-"));
    setLoading(false);
  }

  // Password Visibility Toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      {msg && <h3 className="pt-4 -mb-2 font-semibold text-red-500">{msg}</h3>}

      {loading && (
        <svg className="w-5 h-5 mt-5 animate-spin" viewBox="0 0 24 24">
          <path
            fill="hsl(130, 30%, 60%)"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        {/* Email Input */}
        <input
          type="email"
          className="w-2/3 px-4 py-3 my-6 mb-4 text-base transition duration-300 ease-in-out border border-gray-300 rounded outline-none md:text-md focus:border-primary-500 md:w-1/3 "
          placeholder="Email address"
          value="test@mit.edu"
          name="email"
          required
        />

        {/* Password Input */}
        <div className="relative flex items-center justify-center w-2/3 md:w-1/3">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full py-3 pl-4 pr-12 mt-2 mb-4 text-base transition duration-300 ease-in-out border border-gray-300 rounded outline-none md:text-md focus:border-primary-500 "
            placeholder="Password"
            value="test"
            name="password"
            required
          />
          <button
            className="absolute top-0 right-0 flex items-center h-full px-4 pb-1 text-gray-500"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {isPasswordVisible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>

        {/* Sign In Button */}
        {loading ? (
          <button
            disabled
            type="submit"
            className="px-10 py-2 m-2 text-lg text-white transition duration-300 rounded-lg shadow-md cursor-wait bg-font hover:bg-zinc-800"
          >
            Sign in
          </button>
        ) : (
          <button
            type="submit"
            className="px-10 py-2 m-2 text-lg text-white transition duration-300 rounded-lg shadow-md cursor-pointer bg-font hover:bg-zinc-800"
          >
            Sign in
          </button>
        )}
      </form>
    </>
  );
}
