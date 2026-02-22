import { Flex, Tabs, Typography } from "antd";
import { useContext, useState } from "react";
import { ThemeColorContext } from "../../../App";
import Carousel from "../Carousel";

const { Text } = Typography;

const Song = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const { tabColor, allAlbums } = useContext(ThemeColorContext);

  const filteredAlbums =
    activeGenre === "All"
      ? allAlbums
      : allAlbums.filter((album) => album.genre === activeGenre);

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
      <Carousel albums={filteredAlbums} />
    </Flex>
  );
};

export default Song;
