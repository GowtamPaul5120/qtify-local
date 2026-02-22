import { Button, Flex, Row, Typography } from "antd";
import AlbumCard from "../Albums/AlbumCard";
import Carousel from "../Albums/Carousel";
import "./index.css";

const { Title } = Typography;

const Section = ({ albums, isLoading, title, showAll, setShowAll }) => {
  const ToggleButton = () => {
    setShowAll(!showAll);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Flex vertical gap={18} className="section">
      <Flex align="center" justify="space-between">
        <Title type="secondary" level={3} className="title">
          {title}
        </Title>
        <Button onClick={ToggleButton} type="link">
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Flex>

      {showAll ? (
        <Row gutter={[16, 24]} className="album-grid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </Row>
      ) : (
        <Carousel albums={albums} />
      )}
    </Flex>
  );
};

export default Section;
