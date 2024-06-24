import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import PricingCards from "../components/PricingCards/PricingCards";
import Work from "../components/WorkCards/WorkCard";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        title={"This is a Heading"}
        desc={"Some of my most recent works"}
      />
      <Work />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;
