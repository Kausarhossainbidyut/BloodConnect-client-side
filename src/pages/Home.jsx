import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import ChooseSection from "../components/HeroSection/ChooseSection";
import HeroSection from "../components/HeroSection/HeroSection"
import HomeSection from "../components/HeroSection/HomeSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      {/* <Banner></Banner> */}
      <HeroSection></HeroSection>
      <HomeSection></HomeSection>
      <HowItWorks></HowItWorks>
      <ChooseSection></ChooseSection>
      <CallToAction></CallToAction>
      
    </>
  );
};

export default Home;
