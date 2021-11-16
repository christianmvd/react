import React from "react";
import "./layout.css"
import {NavBar} from "../NavBar/navBar"
import {Footer} from "../Footer/footer"
export const Layout = ({ children }) => {
  return (
    <div className="containerLayout">
     
      <NavBar/>
      {children}
      <Footer/>
    </div>
  );
};
