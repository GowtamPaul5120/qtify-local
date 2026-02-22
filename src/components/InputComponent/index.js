import { Image, Input } from "antd";
import SearchIcon from "../../assets/images/Search icon.svg";

const InputComponent = ({ className, placeholder }) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      suffix={<Image src={SearchIcon} alt="search" />}
    />
  );
};

export default InputComponent;
