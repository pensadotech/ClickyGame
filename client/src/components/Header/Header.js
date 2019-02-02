import React from 'react';
import "./Header.css";

const Header = (props) => (
  <header className="header text-center">
    <div className="row">
      <div className="col-md-2">
         <img className="logoImg imgRnd10 imageShadow imageRotate" 
              alt="click Game"
              src="./images/clickGame.png" />       
      </div>
      <div className="col-md-4">
        <h4 className="gameMsg">{props.gameMsg}</h4>
      </div>
      <div className="col-md-6">
        <h3>Score: {props.score} | Top-Score: {props.topScore}</h3>
      </div>
    </div>  
  </header>
);

export default Header;