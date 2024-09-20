import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="home">
        Retourner sur la page d&apos;acceuil
      </Link>
    </div>
  );
};

export default Error;
