"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import Link from "next/link";

const Verify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [verified, setVerified] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyCheck() {
    // Check if token length is valid to prevent unnecessary requests
    let tokenLength = 0;
    if (token != null) {
      tokenLength = token.length;
    }
    if (tokenLength == 24) {
      setLoading(true);
      setVerified(true);
      setLoading(false);
    } else {
      setMsg("Your verification token is invalid");
    }
  }

  if (!verified) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="m-0 mb-5 text-5xl font-bold text-transparent uppercase bg-gradient-to-r from-primary-500 to-green-600 bg-clip-text">
            Whatsuni
          </h1>
          <span className="mb-5 text-base md:text-xl">
            Click the button below to verify your account.
          </span>

          {loading ? (
            <button
              className="px-10 py-2 text-white transition duration-300 rounded-lg shadow-md cursor-wait text-md bg-zinc-800"
              onClick={verifyCheck}
              type="button"
              disabled
            >
              Verify
            </button>
          ) : (
            <button
              className="px-10 py-2 text-white transition duration-300 rounded-lg shadow-md cursor-pointer text-md bg-font hover:bg-zinc-800"
              onClick={verifyCheck}
              type="button"
            >
              Verify
            </button>
          )}

          {msg && (
            <h3 className="pt-4 -mb-2 font-semibold text-center text-red-500">
              {msg}
            </h3>
          )}

          {loading ? (
            <svg className="w-5 h-5 mt-5 animate-spin" viewBox="0 0 24 24">
              <path
                fill="hsl(130, 30%, 60%)"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 mt-5 opacity-0 animate-spin"
              viewBox="0 0 24 24"
            >
              <path
                fill="hsl(130, 30%, 60%)"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
      </>
    );
  } else if (verified) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="pb-2 text-3xl font-bold text-primary-700">
            Verified succesfully!
          </h1>
          <span className="text-xl">
            Click{" "}
            <Link
              href="/login"
              className="font-semibold underline text-primary-700"
            >
              here
            </Link>{" "}
            to go back to login.
          </span>
        </div>
      </>
    );
  }
};

export default Verify;
