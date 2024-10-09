import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Services from "./services";
import Info from "./Info";
import Club from "./Club";
import Experts from "./Experts";
import Tesmonials from "./Tesmonials";
import CTA from "./CTA";
import Footer from "./Footer";
import About from "./About";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

function Home() {
  // const [isFakeDark, setIsFakeDark] = useState(false);
  // useEffect(
  //   function () {
  //     document.documentElement.classList.toggle("fake-dark-mode");
  //   },
  //   [isFakeDark]
  // );
  return (
    <>
      <section id="title">
        <Navigation />
      
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Ride the Wealth Wave: Your Journey to 
              <b> Financial Freedom</b> Begins Here.
            </h1>
            <p className="desc">
              Expertise, Guidance, and Growth – Surf the Wave of Success with
              Us!
            </p>
            <button
              type="button"
              className="btn btn-outline-light btn-lg download-button"
            >
              Explore Program
            </button>
         
          </div>
          <div className="col-lg-6">
         
            <img
              src="Images/Men_invest_and_have_made_a_profit_generated-removebg-preview.png"
              className="image"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>

    <Services />
    <Info />
    <Club />
    <Experts />
    <Tesmonials />
    <CTA />
    <Footer />

    </>
  );
}

export default Home;
