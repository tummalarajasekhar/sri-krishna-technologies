import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";

import axios from "axios";
import Card from "./component/Card";
import logo from "./assets/skt.png"
import 'animate.css'
import "./App.css"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate} from 'react-router-dom'

const reasons = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience in their respective fields.",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Flexible Learning",
    description:
      "Access courses anytime, anywhere, and learn at your own pace with lifetime access.",
    icon: "⌛",
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Join a community of learners to collaborate, share insights, and grow together.",
    icon: "🤝",
  },
  {
    id: 4,
    title: "Career Opportunities",
    description:
      "Gain skills that employers value and increase your chances of landing your dream job.",
    icon: "🚀",
  },
];

function App() {
  const navigate=useNavigate()

const privacypolicy=()=>{
navigate("/privacy-policy")

}
const termsofservice=()=>{
  navigate("/terms-of-service")


}

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    message: "",
  });


  const handleLogoClick = () => {
    window.location.reload(); // Reload the page when the logo is clicked
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const courses = [
    {
        image: "https://www.sectorlink.com/img/blog/web-devel-important.jpg",
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and more to build modern websites.",
    },
    
    {
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
        name: "Cyber Security",
        description: "Master ethical hacking and information security fundamentals.",
    },
    
    {
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230807133054/Data-structure-algorithm.png",
        name: "DSA",
        description: "Master data structures and algorithms for competitive coding and interviews.",
        languages: ["Arrays", "Linked Lists", "Binary Trees", "Graphs", "Sorting Algorithms"],
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcT6TGFoMTTycvjpsTyFXHnNI3kNNbpYeUUw&s",
        name: "Microsoft Office",
        description: "Learn Microsoft Word, Excel, PowerPoint, and Access for productivity.",
        languages: ["Word", "Excel", "PowerPoint", "Access"],
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qSerI12qbu7m65V8ZlnnmCUj49Lz6zNyaw&s",
      name: "Programming Languages",
      description: "Learn the foundational programming languages to start your coding journey.",
      languages: ["Python", "Java", "C++", "JavaScript"],
  },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlydx7FsintRdacyUEMfNVlr0ACDsUcwk5g&s", // Placeholder image URL
        name: "Adobe Photoshop",
        description: "Learn to edit and create stunning visuals using Photoshop.",
    },
    {
        image: "https://computerhindinotes.com/wp-content/uploads/2019/01/pagemaker-screen.jpg", // Placeholder image URL
        name: "Adobe PageMaker",
        description: "Master desktop publishing and design with Adobe PageMaker.",
    },
    
    {
        image: "https://images.ctfassets.net/23aumh6u8s0i/6wTbGkTM3EBoO6hytvOcXj/d0144f86227382219fd2c8f4f53499c6/illustration", // Placeholder image URL
        name: "MongoDB",
        description: "Understand NoSQL databases with MongoDB fundamentals and applications.",
    },
    {
        image: "https://cdn.plainconcepts.com/wp-content/uploads/2022/09/power-bi-que-es.jpg", // Placeholder image URL
        name: "Power BI",
        description: "Learn to create insightful data visualizations and dashboards using Power BI.",
    },
    {
        image: "https://vrindawan.in/wp-content/uploads/2023/05/Image-2-1.jpg", // Placeholder image URL
        name: "Computer Basics",
        description: "Get introduced to fundamental computer skills and basic operations.",
    },
];






  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://sri-krishna-technologies.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", enroll: "", message: "" });
        setIsSubmitting(false);
      } else {
        toast.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // why us
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const [images, setImages] = useState([]);

  // Fetch slider data from the backend
  useEffect(() => {
    axios
      .get("https://swiper-skt.onrender.com/posts") // Replace with your backend endpoint
      .then((response) => setImages(response.data))


      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    
      <div className="bg-gray-100">
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Navbar */}


        <nav className="bg-white shadow-md p-1 z-50 fixed w-full top-0 left-0">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="logo w-16 sm:w-16 cursor-pointer animate__animated animate__fadeIn animate__delay-1s"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-blue-500 focus:outline-none"
        >
          {/* Conditionally render hamburger or close icon */}
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white lg:static lg:block lg:w-auto mt-4 lg:bg-transparent`}
        >
          <div className="flex flex-col lg:flex-row">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer"
            >
              Courses
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer"
            >
              Contact
            </Link>

            {/* Location and Phone Section (visible in large screens) */}
            <div className="flex items-center space-x-4">
              {/* Location Icon with link */}
              <div className="hidden lg:flex items-center text-gray-700">
                <Link to="location" smooth={true} duration={500}>
                  <FaMapMarkerAlt className="mr-2 text-xl" />
                </Link>
                <Link
                  to="location"
                  smooth={true}
                  duration={500}
                  className="text-sm hover:underline"
                >
                  5-11-116, Rohini Appt, Opp, Apex Building, 2/3, Brodipet, Guntur
                </Link>
              </div>

              {/* Phone Icon */}
              <div className="hidden lg:flex items-center text-gray-700">
                <FaPhoneAlt className="mr-2 text-xl" />
                <a
                  href="tel:+919491461500" // Add tel link to trigger phone call
                  className="text-sm"
                >
                  +91 9491461500
                </a>
              </div>
            </div>

            {/* Mobile Menu Section: Location & Phone */}
            <div className="lg:hidden mt-4">
              <div className="flex items-center text-gray-700">
              <Link  to="location"
              smooth={true}
              duration={500}><FaMapMarkerAlt className="mr-2 text-xl" /></Link>

                <Link  to="location"
              smooth={true}
              duration={500}>
                
                <span className="text-sm">5-11-116, Rohini Appt, Opp, Apex Building, 2/3, Brodipet, Guntur</span> </Link>
              </div>
              <div className="flex items-center text-gray-700 mt-2">
                <FaPhoneAlt className="mr-2 text-xl" />
                <a href="tel:+919491461500" className="text-sm">
                  +91 9491461500
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col items-center justify-center px-4 sm:px-8"
        >
          {/* Logo */}
          <div
            className="animate-[popIn_1s_ease-in-out] mb-8"
            style={{ animationFillMode: "forwards" }}
          >
            {/* <img
  src="your-logo-url-here.png"
  alt="Logo"
  className="w-40 sm:w-64 lg:w-80 object-contain rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
/> */}

            <img
              src={logo}
              alt="Logo"
              className="w-40 sm:w-64 lg:w-80 h-auto object-contain rounded-full  transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s">
              Welcome to Sri Krishna Technologies
            </h1>
            <p className="text-sm p-4 sm:text-base lg:text-lg font-light animate__animated animate__fadeIn animate__delay-2s">
              Your path to learning new skills and improving your knowledge.
            </p>
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="bg-white text-blue-500 py-2 px-8  rounded-full font-semibold hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
            >
              Explore Courses
            </Link>
          </div>
        </section>

        {/* slider */}

        <section className="container12 flex justify-center items-center h-auto my-8">
          <div className="slider-wrapper relative lg:w-[85%] sm:w-[100%] lg:h-[600px] overflow-hidden rounded-lg">
            {/* Slider Images */}
            <div
              className="slider flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] sm:h-[600px] md:h-[700px] object-cover rounded-lg"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 sm:left-6"
            >
              &#10094; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 sm:right-6"
            >
              &#10095; {/* Right Arrow */}
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-500"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses"><h2 className="text-4xl font-bold text-gray-800 mb-8 text-center pt-6">
          Our Courses
        </h2>
          <div className="container12 h-auto gap-20">

            {courses.map((course) => (
              <Card
                key={course.id}
                image={course.image} // Use placeholder or a custom image
                header={course.name}
                content={course.description}
                formData={formData}
              />
            ))}
          </div>
        </section>





        {/* About Section */}
        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Sri Krishna Technologies is a leading institution providing high-quality education in various fields including web development, data science, and cyber security. Our mission is to empower learners to achieve their career goals.
            </p>
          </div>
        </section>
        {/* why Us */}

        <section id="why-us" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Why Choose Us?
            </h2>
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto overflow-hidden">
              <div
                key={reasons[currentIndex].id}
                className="animate-slideIn transition-opacity duration-500 ease-in-out"
              >
                <div className="text-6xl mb-4">{reasons[currentIndex].icon}</div>
                <h3 className="text-2xl font-semibold mb-4">
                  {reasons[currentIndex].title}
                </h3>
                <p className="text-gray-600">{reasons[currentIndex].description}</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {reasons.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300"
                    } transition duration-300`}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input type="tel" className="w-full p-2 border rounded-md" placeholder="Your phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Enroll</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Course you are interested in" name="enroll" value={formData.enroll} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full p-2 border rounded-md" placeholder="Your message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
        {/* maps */}
        <section id="location" className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Location
          </h2>

          <div style={{ textAlign: 'center', marginTop: '20px' }} className="border hover:border-blue-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.43319975235!2d80.438045!3d16.300795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzAyLjkiTiA4MMKwMjYnMTcuMCJF!5e0!3m2!1sen!2sin!4v1735749434233!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </section>


        {/* footer */}

        <footer className="bg-gray-900 text-gray-400 py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">
                📍 5-11-116, Rohini Appt, Opp, Apex Building, 2/3, Brodipet, Guntur.
              </p>
              <p className="text-sm mt-2">📧 srikrishnatechnologies09@gmail.com</p>
              <p className="text-sm mt-2">📞 +91 9848673539</p>
              <p className="text-sm mt-2">📞 +91 9491461500</p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="home" smooth={true} duration={500} className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500} className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="courses" smooth={true} duration={500} className="hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <i className="fab fa-facebook-f">Facebook</i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-twitter">Twitter</i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fab fa-linkedin-in">LinkedIn</i>
                </a> */}
                <a
                  href="https://www.instagram.com/srik_rishnatechnologies09?igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <i className="fab fa-instagram">Instagram</i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sri Krishna Technologies. All rights reserved.
            </p>
            <div className="flex justify-center mt-2 space-x-4 text-sm">
              <a href="#" onClick={privacypolicy} className="hover:text-white">
                Privacy Policy
              </a>
              <a onClick={termsofservice} className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>


        {/* Back to Top Button */}
        {showScrollToTop && (
          <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
            ↑
          </button>
        )}
      </div>
    
  );
}

export default App;
