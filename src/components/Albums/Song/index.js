import { useState, useContext } from "react";
import { Flex, Typography, Tabs } from "antd";
import Slider from "../Slider";
import { topAlbums } from "../TopAlbum";
import { ThemeColorContext } from "../../../App";

const { Text } = Typography;

const Song = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const tabColor = useContext(ThemeColorContext);

  const filteredAlbums =
    activeGenre === "All"
      ? topAlbums
      : topAlbums.filter((album) => album.genre === activeGenre);

  return (
    <Flex vertical gap={18} className="section">
      <Text className="sub-heading" style={{ color: tabColor.colorWhite }}>
        Songs
      </Text>
      <Tabs
        defaultActiveKey="All"
        onChange={(key) => setActiveGenre(key)}
        items={[
          { key: "All", label: "All" },
          { key: "Rock", label: "Rock" },
          { key: "Pop", label: "Pop" },
          { key: "Jazz", label: "Jazz" },
          { key: "Blues", label: "Blues" },
        ]}
        className="genre-tabs"
      />
      <Slider albums={filteredAlbums} />
    </Flex>
  );
};

export default Song;
