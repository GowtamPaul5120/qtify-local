import { Flex, Typography } from "antd";
import Slider from "../Slider";
import "../index.css";
import { topAlbums } from "../TopAlbum";

const { Text } = Typography;

const NewAlbum = () => {
  return (
    <Flex vertical gap={18} className="section">
      <Text className="sub-heading">New Albums</Text>
      <Slider albums={topAlbums} />
    </Flex>
  );
};

export default NewAlbum;
