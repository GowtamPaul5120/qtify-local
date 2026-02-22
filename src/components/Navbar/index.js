import { Flex } from "antd";
import logo from "../../assets/images/logo.png";
import ButtonComponent from "../ButtonComponent";
import InputComponent from "../InputComponent";
import "./index.css";

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" className="navbar">
      <img src={logo} alt="logo" />
      <InputComponent
        className="input-header"
        placeholder="Search a album of your choice"
      />
      <ButtonComponent text="Give Feedback" />
    </Flex>
  );
};

export default Navbar;
