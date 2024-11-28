import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./customer/AdminPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [courses, setCourses] = useState([
    { id: 1, name: "Web Development", description: "Learn HTML, CSS, JavaScript, and more to build modern websites." },
    { id: 2, name: "Data Science", description: "Dive into Python, Machine Learning, and data analysis techniques." },
    { id: 3, name: "Cyber Security", description: "Master ethical hacking and information security fundamentals." },
  ]);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "srikrishna@admin#2024#courses") { 
      setIsAuthenticated(true);
    } else {
      toast.error("Incorrect password. Please try again.");
      setPassword("");
    }
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

  return (
    <Router>
      <div className="bg-gray-100">
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Navbar */}
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center relative">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold text-blue-500">
              Sri Krishna Technologies
            </a>

            {/* Hamburger Button */}
            <button onClick={toggleMenu} className="lg:hidden text-blue-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Menu Items */}
            <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-white lg:static lg:block lg:w-auto lg:bg-transparent`}>
              <div className="flex flex-col lg:flex-row">
                <Link to="home" smooth={true} duration={500} className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer">
                  Home
                </Link>
                <Link to="courses" smooth={true} duration={500} className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer">
                  Courses
                </Link>
                <Link to="about" smooth={true} duration={500} className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer">
                  About
                </Link>
                <Link to="contact" smooth={true} duration={500} className="text-gray-700 px-4 py-2 lg:mx-4 hover:text-blue-500 cursor-pointer">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sri Krishna Technologies</h1>
            <p className="text-lg mb-6">Your path to learning new skills and improving your knowledge</p>
            <Link to="courses" smooth={true} duration={500} className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200">
              Explore Courses
            </Link>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">{course.name}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <button onClick={() => toast.info('Fill the contact us page to enroll!')} className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admin Page */}
        <Routes>
          <Route
            path="/srikrishnatechnologiesadmin"
            element={
              isAuthenticated ? (
                <AdminPage courses={courses} setCourses={setCourses} />
              ) : (
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Admin Authentication</h2>
                  <form onSubmit={handlePasswordSubmit}>
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md mb-4"
                      placeholder="Enter password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600">
                      Submit
                    </button>
                  </form>
                </div>
              )
            }
          />
        </Routes>

        {/* About Section */}
        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Sri Krishna Technologies is a leading institution providing high-quality education in various fields including web development, data science, and cyber security. Our mission is to empower learners to achieve their career goals.
            </p>
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

        {/* Back to Top Button */}
        {showScrollToTop && (
          <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
