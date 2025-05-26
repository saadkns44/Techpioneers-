import React from "react";
import tkvideo from "../../assets/tkvideo.mp4";
import Navbar from "../navbar/navbar";
import AcademyProcess from "../componentsUi/AcademyProcess";
import Facilities from "../componentsUi/Facilities";
import GetToKNowUs from "../componentsUi/GetToKNowUs";
import Ourteam from "../componentsUi/OurTeam";
import Gellary from "../componentsUi/Gellary";
import Testimonial from "../componentsUi/Testimonial";
import Blog from "../componentsUi/BlogAndArticls";
import JoinUs from "../componentsUi/JoinUs";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/Registration");
  };

  return (
    <>
      {/* === Hero Section === */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* === Background Video === */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={tkvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* === Optional Dark Overlay === */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* === Foreground content === */}
        <div className="relative z-10 flex flex-col h-full text-white px-6 md:px-20 pt-4">
          {/* Navbar */}
          <Navbar />

          {/* Hero content */}
          <div className="flex flex-col justify-center flex-grow items-center md:items-start text-center md:text-left gap-y-6">
            <h1 className="text-2xl md:text-4xl font-bold font-alegreya">
              Tech Pioneers
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight font-alegreyas max-w-3xl">
              Join Us To Pioneer Your Tech Career
            </h2>
            <button
              onClick={handleViewMoreClick}
              className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm mt-2 hover:bg-gray-200 transition"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* === Page Sections === */}
      <div id="academy-process">
        <AcademyProcess />
      </div>
      <div id="facilities">
        <Facilities />
      </div>
      <div id="get-to-know-us">
        <GetToKNowUs />
      </div>
      <div id="our-team">
        <Ourteam />
      </div>
      <div id="gallery">
        <Gellary />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="join-us">
        <JoinUs />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
