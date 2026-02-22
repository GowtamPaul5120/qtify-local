import { Flex } from "antd";
import headphones from "../../assets/images/vibrating-headphone.png";
import "./index.css";

const Hero = () => {
  return (
    <section className="hero">
      <Flex justify="center" align="center" className="hero-section" gap={24}>
        <h1>
          100 Thousand Songs, ad-free
          <br />
          Over thousands podcast episodes
        </h1>
        <img src={headphones} alt="headphones" />
      </Flex>
    </section>
  );
};

export default Hero;
