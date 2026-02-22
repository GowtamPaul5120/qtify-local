import { Button, Flex, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../Albums/AlbumCard";
import "./index.css";

const { Title } = Typography;
const Section = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );
      if (response.data.length > 0) {
        setTopAlbums(response.data);
      } else {
        setTopAlbums([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Flex vertical gap={18} className="section">
      <Flex align="center" justify="space-between">
        <Title type="secondary" level={3} className="sub-heading">
          Top Albums
        </Title>
        <Button type="link">Collapse</Button>
      </Flex>

      <Row gutter={[16, 24]} className="album-grid">
        {topAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Row>
    </Flex>
  );
};

export default Section;
