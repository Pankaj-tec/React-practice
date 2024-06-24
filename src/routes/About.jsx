import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 title={"About"}
       desc={"Im a friendly front-End Developer."} />
       <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
