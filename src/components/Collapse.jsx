import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="collapse">
        <button className="collapse-header" onClick={toggleCollapse}>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>{title} </span>
          <FaChevronUp className={`chevron ${isOpen ? 'open' : ''}`} />
        </button>
        <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
          {content}
        </div>
      </div>
    );
  };

  Collapse.propTypes =  {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
  }
  export default Collapse;