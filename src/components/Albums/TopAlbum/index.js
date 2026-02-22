import { Flex } from "antd";
import Section from "../../Section";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TopAlbum = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );
      if (response.data.length > 0) {
        setTopAlbums(response.data.slice(0, 13));
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

  return (
    <Flex vertical gap={18}>
      <Section albums={topAlbums} isLoading={isLoading} />
    </Flex>
  );
};

export default TopAlbum;
