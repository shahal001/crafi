import React from "react";
import NavBar from "../components/NavBar";
import image from "../../assets/images/HomeImage.jpg";
import img1 from "../../assets/test/img1.jpg";
import img2 from "../../assets/test/img2.jpg";
import img3 from "../../assets/test/img3.jpg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Home() {
  return (
    <div>
      {/* NavBar */}
      <NavBar />
      {/* banner section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side */}
        <div className="flex flex-col flex-1 justify-center items-center h-1/2 md:h-full border space-y-5 p-6">
          <h1 className="text-black text-4xl sm:text-5xl md:text-7xl font-roboto tracking-wide animate-fadeInUp animate-fadeInUpText">
            Crafi Innovations
          </h1>
          <h2 className="text-black text-lg sm:text-xl md:text-2xl font-roboto tracking-wide animate-fadeInUp delay-200 animate-fadeInUpText ">
            Where Craftsmanship Meets Arts.
          </h2>
          <button
            className="p-2 sm:p-3 px-6 sm:px-8 border tracking-wide bg-white text-black 
                       hover:bg-[#004466] hover:text-white hover:border-white
                       transition-colors duration-300 animate-fadeInUp delay-500"
          >
            Explore More
          </button>
        </div>

        {/* Right side */}
        <div className="flex-1 h-1/2 md:h-full">
          <img
            src={image}
            alt="Home tool"
            className="w-full h-full object-cover animate-fadeInUp"
          />
        </div>
      </div>
      {/* service section */}
      <div className=" px-6 sm:px-10 py-10 border-b ">
        <h1 className="text-2xl sm:text-3xl font-roboto text-center md:text-center animate-fadeInUpText">
          Our Services
        </h1>
        <p className="font-roboto text-center md:text-center animate-fadeInUpText">
          We specialize in crafting unique, handmade products across a variety
          of categories
        </p>
        <p className="font-roboto text-center md:text-center italic pb-5 animate-fadeInUpText">
          "Our dedication to creative craftsmanship ensures that every product
          and service is truly one of a kind, embodying the highest standards of
          artistry and quality."
        </p>

        <div className="p-4 sm:p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:flex lg:overflow-x-auto lg:overflow-y-hidden lg:space-x-6 lg:scroll-smooth scrollbar-hide">
          {/* Card 1 */}
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img1}
              alt="Service 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">Gifts</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img2}
              alt="Service 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">Awards</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img3}
              alt="Service 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Households
              </span>
            </div>
          </div>
          {/* Repeat for other cards */}
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img1}
              alt="Service 4"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Interior Design
              </span>
            </div>
          </div>
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img2}
              alt="Service 5"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Govt. Projects
              </span>
            </div>
          </div>
          <div className=" shadow-xl h-80 min-w-[250px] flex flex-col justify-center items-center relative group">
            <img
              src={img3}
              alt="Service 6"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-100 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Govt. Leisure Venues
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* why us */}
      <div className="border-b">
        <h1 className="text-2xl pt-10 sm:text-3xl font-roboto text-center md:text-center animate-fadeInUpText">
          Our Promise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className=" text-xl font-roboto pb-3">Unique Designs</h1>
            <p className=" max-w-100 font-roboto italic border-b">
              We offer designs that stand out, meticulously crafted to reflect
              creativity and innovation. Each piece is thoughtfully created to
              bring a sense of uniqueness to our customers ensuring that no two
              pieces are ever alike. Our commitment to originality means that
              our designs not only follow trends but also set them.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-xl font-roboto pb-3">
              Ethically Sourced Materials
            </h1>
            <p className="max-w-100 font-roboto italic border-b">
              We are dedicated to sustainability and responsible sourcing. Our
              materials are carefully selected from ethical suppliers ensuring
              they are both high-quality and eco-friendly. By choosing us, you
              are supporting a business that values fair practices and is
              committed to reducing its environmental impact.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-xl font-roboto pb-3">
              Customization
            </h1>
            <p className="max-w-100 font-roboto italic border-b">
              We believe in personalization, so we offer customization options
              to bring your vision to life. Whether it's a unique color,
              material or design tweak. we work with you to create a piece that
              is truly yours. Our customization process ensures that each item
              reflects your style and preferences.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-xl font-roboto pb-3">
              Skilled Artisans
            </h1>
            <p className="max-w-100 font-roboto italic border-b mb-2">
              Our team is made up of skilled artisans with years of experience,
              bringing traditional craftsmanship to each item. They take pride
              in their craft, blending traditional techniques with modern
              designs to produce exceptional quality. Their dedication and
              artistry guarantee a product that is both beautiful and built to
              last.
            </p>
          </div>
        </div>
      </div>
      {/*projects*/}
      <div className="flex flex-col items-center pt-10 pb-10 border-b">
        <h2 className="text-3xl font-roboto ">Projects</h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 ">
          {/* Card 1 */}
          <div className="w-full aspect-[6/7] overflow-hidden shadow-md relative group">
            <img
              src={img1}
              alt="Service 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Govt. Projects
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full aspect-[6/7] overflow-hidden shadow-md relative group">
            <img
              src={img2}
              alt="Service 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Chaliyam Project
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full aspect-[6/7] overflow-hidden shadow-md relative group">
            <img
              src={img3}
              alt="Service 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                Ulccs Project
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full aspect-[6/7] overflow-hidden shadow-md relative group">
            <img
              src={img1}
              alt="Service 4"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
              <span className="text-white text-2xl font-roboto">
                G20 project
              </span>
            </div>
          </div>
        </div>
        <button
          className=" text-center p-2 sm:p-3 px-6 sm:px-8 border tracking-wide bg-white text-black 
                       hover:bg-[#004466] hover:text-white hover:border-white
                       transition-colors duration-300 animate-fadeInUp delay-500"
        >
          Show More
        </button>
      </div>
      {/* footer */}
      <div className=" text-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6 md:p-10">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-4">
            <div className="font-roboto text-3xl font-semibold">Crafi</div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left space-y-4">
            <div>
              <div className="text-sm sm:text-base">+91 8899558855</div>
              <div className="text-sm sm:text-base">crafi@gmail.com</div>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <FaFacebook size={24} />
              <RiInstagramFill size={24} />
            </div>
          </div>

          {/* Address & Legal */}
          <div className="text-center md:text-left space-y-3">
            <div className="text-sm sm:text-base">
              500 Terry Francine St. San Francisco, CA 94158
            </div>
            <div className="text-sm sm:text-base">
              Privacy Policy • Accessibility Statement
            </div>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-600 text-center py-10">
          © 2025 Crafi. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
