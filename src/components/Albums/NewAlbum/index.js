import { Flex } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Section from "../../Section";
import "../index.css";

const NewAlbum = () => {
  const [newAlbums, setNewAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new",
      );
      setNewAlbums(response.data.length > 0 ? response.data : []);
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
        albums={newAlbums}
        isLoading={isLoading}
        title="New Albums"
        showAll={showAll}
        setShowAll={setShowAll}
      />
    </Flex>
  );
};

export default NewAlbum;
