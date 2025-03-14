import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
  faSquareFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"; // Import your desired icon

const Social = () => {
  return (
    <div className="w-full flex justify-start gap-4 lg:gap-6  ">
      <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
      <FontAwesomeIcon icon={faInstagram} className="icon" />
      <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
    </div>
  );
};

export default Social;
