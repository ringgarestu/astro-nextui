import { useState } from "react";
import React from "react";
import { Button, Input, Image } from "@nextui-org/react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    if (!isValidEmail(email)) {
      setResponseMessage("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setResponseMessage("");

    const url = import.meta.env.PUBLIC_REACT_APP_API_URL;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === "success") {
        setResponseMessage("Thank you! Your email has been successfully registered.");
        setEmail("");
      } else {
        setResponseMessage(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Hey Everybody! We're coming soon...</h2>
        <p className="text-sm md:text-base text-white mb-8">Get ready to be the first to experience the sophistication of the PestDoc-AI app. Register your email to get an invitation when we launch. Thank you.</p>
        <form className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input className="w-full sm:w-2/3" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit" onPress={handleSubmit} className="w-full sm:w-auto bg-gradient-to-tr from-[#B8E7BD] to-[#35BA8F] text-white font-medium h-12" style={{ borderRadius: "0.5rem" }} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Notify me"}
          </Button>
        </form>
        {responseMessage && <p className="text-black mb-6">{responseMessage}</p>}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/pestdoc_ai" className="text-black">
            <img src="assets/instagram-landingpage.svg" alt="instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com/@pestdoc_ai" className="text-black">
            <img src="assets/tiktok.svg" alt="tiktok" className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image src="assets/hp-avatar.svg" alt="Rectangle" className="w-full max-w-md mx-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
