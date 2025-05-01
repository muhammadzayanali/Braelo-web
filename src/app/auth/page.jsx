"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginApi } from "@/app/API/method";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await LoginApi("/admin-panel/login", {
        email,
        password,
      });

      console.log("Full response:", response);

      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      const token = response.data?.token?.access || 
                    response.data?.access_token || 
                    response.data?.data?.token?.access;

      if (!token) {
        throw new Error("Token not found in response");
      }

      localStorage.setItem("token", token);
      toast.success("Login successful!");
      router.push("/pages/dashboard");

    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen grid grid-cols-12">
        {/* Left Section */}
        <div className="col-span-6 flex items-center justify-center">
          <div className="space-y-8">
            <h1 className="text-[25px] font-bold text-[#232F30] font-plus">
              Braelo Power Admin
            </h1>
            <form onSubmit={handleClick}>
              <div className="flex flex-col space-y-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-[300px] flex items-center justify-center bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-plus ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        ></path>
                      </svg>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <ImageSection />
      </div>
    </>
  );
}

const ImageSection = () => {
  return (
    <div className="col-span-6 relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end">
        <Image
          src="/images/2.png"
          alt="login1"
          className="absolute right-[50px] top-0 max-h-full h-full object-cover"
          width={500}
          height={500}
        />
        <Image
          src="/images/3.png"
          alt="login2"
          className="absolute right-[25px] top-0 max-h-full h-full object-cover"
          width={500}
          height={500}
        />
        <div>
          <Image
            src="/images/1.png"
            alt="login3"
            className="absolute right-0 top-0 max-h-full h-full rounded-lg object-cover"
            width={500}
            height={500}
          />
          <h2 className="relative z-50 text-white bottom-52 right-64 w-44 text-xl p-0">
            Somos a <span className="font-bold">conexão</span> entre negócios,{" "}
            <span className="font-semibold">pessoas e sonhos</span>
          </h2>
          <div>
            <Image
              src="/images/white logo.png"
              alt="login4"
              className="relative z-50 text-white top-52 right-64 "
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
