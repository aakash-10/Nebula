import React from "react";

export default function Hero({children}) {
  return (
  <div className="hero">
    <div className="banner">
        {children}
      <h1>Think, Code, Deploy</h1>
      <p>Embrace yourself</p>
     


    </div>

  </div>
    );
}
