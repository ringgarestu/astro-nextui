import { useState } from "react";
import React from "react";
import { Button, Input } from "@nextui-org/react";

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
    <div className="flex flex-col md:flex-row p-3 md:p-10">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Hey Guys! We're coming soon...</h2>
        <p className="mt-10 text-white">Get ready to be the first to experience the sophistication of the PestDoc-AI app. Register your email to get an invitation when we launch. Thank you.</p>

        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} client:visible />
        <Button type="submit" onPress={handleSubmit} className="bg-gradient-to-tr from-[#B8E7BD] to-[#35BA8F] text-white font-medium h-[56px]" style={{ borderRadius: "0.5rem" }} disabled={isSubmitting} client:visible>
          {isSubmitting ? "Submitting..." : "Notify me"}
        </Button>

        {responseMessage && <p className="mt-4 text-black">{responseMessage}</p>}
        <div className="socmed flex space-x-2 mt-10">
          <a href="https://www.instagram.com/pestdoc_ai" className="text-black">
            <img src="assets/instagram-landingpage.svg" alt="instagram" className="w-8 h-6" />
          </a>
          <a href="https://www.tiktok.com/@pestdoc_ai" className="text-black">
            <img src="assets/tiktok.svg" alt="tiktok" className="w-8 h-6" />
          </a>
        </div>
      </div>
      <div className="m-0">
        <img src="assets/Hp.svg" alt="Hp" />
      </div>
      <div>
        <img src="assets/Human.svg" alt="Human" />
      </div>
    </div>
  );
};

export default HeroSection;
