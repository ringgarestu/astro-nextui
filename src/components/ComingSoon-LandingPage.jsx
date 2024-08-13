import React from "react";
import Header from "./Header-LandingPage";
import HeroSection from "./HeroSection";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen bg-custom-bg text-white">
      <Header />
      <HeroSection client:visible />
    </div>
  );
};

export default ComingSoon;
