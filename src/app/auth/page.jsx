"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/pages/dashboard");
  };

  return (
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
                className="w-[300px] bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-plus"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <ImageSection />
    </div>
  );
}

const ImageSection = () => {
  return (
    <div className="col-span-6 relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end">
        <Image
          src="/images/2.png" // Use relative paths for images
          alt=""
          className="absolute right-[50px] top-0 max-h-full h-full object-cover"
          width={500} // Adjust width as necessary
          height={500} // Adjust height as necessary
        />
        <Image
          src="/images/3.png"
          alt=""
          className="absolute right-[25px] top-0 max-h-full h-full object-cover"
          width={500}
          height={500}
        />
        <Image
          src="/images/1.png"
          alt=""
          className="absolute right-0 top-0 max-h-full h-full rounded-lg object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Login;
