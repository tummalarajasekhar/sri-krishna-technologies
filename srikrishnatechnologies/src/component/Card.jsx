import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";

const Card = ({ image, header, content ,formData}) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // const navigate = useNavigate();
  const handleEnrollClick = () => {
    toast.info('Fill the contact us page to enroll!')
    formData.enroll=header
    
  };
 
  useEffect(() => {
    // Set card dimensions for calculations
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - dimensions.width / 2,
      y: e.clientY - rect.top - dimensions.height / 2,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      setMousePosition({ x: 0, y: 0 });
    }, 1000); // Smooth reset delay
  };

  const rotateX = (mousePosition.y / dimensions.height) * -30; // Rotation on X-axis
  const rotateY = (mousePosition.x / dimensions.width) * 30; // Rotation on Y-axis

  return (
    <div
      className="card-wrap"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`card ${isHovering ? "hovered" : ""}`}
        style={{
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transition: isHovering ? "none" : "transform 1s ease",
        }}
      >
        <div
          className="card-bg"
          style={{
            backgroundImage: `url(${image})`,
            transform: `translate3d(0px, 0px, 0px)`, // Synchronized image movement with card
          }}
        ></div>
        <div className={`card-info ${isHovering ? "show" : ""}`}>
          <h1>{header}</h1>
          <p className="pb-1">{content}</p>
          <Link to='contact' smooth={true} duration={500} className="enroll-button" onClick={handleEnrollClick} >
            Enroll Now
            </Link> 
          
        </div>
      </div>
    </div>
  );
};
export default Card