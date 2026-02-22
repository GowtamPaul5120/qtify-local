import { Flex } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Section from "../../Section";
import "../index.css";

const TopAlbum = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );
      setTopAlbums(response.data.length > 0 ? response.data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Flex vertical gap={18}>
      <Section
        albums={topAlbums}
        isLoading={isLoading}
        title="Top Albums"
        showAll={showAll}
        setShowAll={setShowAll}
      />
    </Flex>
  );
};

export default TopAlbum;
