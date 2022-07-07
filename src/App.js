import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default function BusinessCard(){
  return (
    <div className="business-card-container">
      <div className="card-photo">
        <img src={require("./Cuz.png")} />
      </div>
      <div className="card-info">
        <h1 className="name-ele">Danzel Gempis</h1>
        <h2 className="title-ele">Software Engineer</h2>
        <h3 className="website-ele">danzelgempis.com</h3>
        <btn className="email-btn">Email</btn>
        <a href="https://www.linkedin.com/in/danzel-gempis-96b9a5240/" target="_blank">
        <btn className="linkedin-btn">LinkedIn</btn>
        </a>
        <div className="text-container">
          <h1 className="about-header">About</h1>
          <p>I am a Software Engineer with a particular intest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h1 className="interest-header">Interests</h1>
          <p>Food expert. Camping. Musician. Athlete. Coffee Fanatic.</p>
        </div>
      </div>
      <div className="card-footer">
        <a href="https://twitter.com/" target="_blank">
          <img src={require("./Twitter Icon.png")}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100080036344749" target="_blank">
          <img src={require("./Facebook Icon.png")}/>
        </a>
        <a href="https://www.instagram.com/gempis11/"> 
          <img src={require("./Instagram Icon.png")}/>
        </a>
        <a href="https://github.com/DGempis" target="_blank">
          <img src={require("./GitHub Icon.png")}/>
        </a>
      </div>
    </div>
  )
}

