import Footer from "./Footer";
import Navigation from "./Navigation";

function About() {
  return (
    <div>
      <Navigation />
      <section>
        <div className="container">
          <div className="row about mt-5">
            <div class="col-lg-6">
              <h1>
                <b>About Us</b>
              </h1>
              <p>
                At Wealth Wave, we're more than just financial service providers
                – we're your partners in prosperity. With a steadfast commitment
                to excellence and a passion for helping our clients achieve
                their financial goals, we offer a range of comprehensive
                solutions tailored to your unique needs. Our team of seasoned
                experts brings a wealth of knowledge and experience to the
                table, guiding you through every twist and turn of the financial
                landscape with skill and dedication. Whether you're seeking
                personalized financial advice, expert fund management, or
                strategic investment solutions, we're here to support you on
                your journey to financial success. Trust Wealth Wave to navigate
                the currents of wealth with integrity, insight, and unwavering
                commitment to your prosperity.
              </p>
            </div>
            <div class="col-lg-6">
              <img
                src="https://jep-asset.akamaized.net/cms/assets/jfs/about/jfs-about-mainbanner.webp"
                className="about-img"
                alt=""
              />
            </div>
          </div>
          <div className="row vision">
            <div className="col-lg-6">
              <h1>
                <b>Our Vision</b>
              </h1>
              <img
                src="Images/micheile-henderson-SoT4-mZhyhE-unsplash.jpg"
                class="about-img"
                alt=""
        
              />
            </div>
            <div className="col-lg-6">
              <p>
                At Wealth Wave, our vision is to empower individuals and
                families to achieve financial freedom and security. We strive to
                be the guiding beacon in the ever-changing sea of finance,
                providing innovative solutions and personalized guidance that
                enable our clients to navigate confidently towards their goals.
                By fostering a culture of trust, integrity, and excellence, we
                aim to become the premier destination for those seeking to ride
                the wave of wealth towards a brighter and more prosperous
                future. Together, we envision a world where everyone has the
                knowledge, tools, and support they need to make their financial
                dreams a reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
