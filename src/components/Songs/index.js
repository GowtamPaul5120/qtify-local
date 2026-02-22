import { Flex, Tabs, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../Albums/Carousel";

const { Title } = Typography;

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/songs",
      );
      setSongs(response.data.length > 0 ? response.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/genres",
      );
      setGenres(response.data.data.length > 0 ? response.data.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      await Promise.all([fetchSongs(), fetchGenres()]);
      setIsLoading(false);
    };
    fetchAll();
  }, []);

  const tabItems = [
    {
      key: "all",
      label: "All",
      children: <Carousel isSong={true} albums={songs} />,
    },
    ...genres.map((genre) => ({
      key: genre.key,
      label: genre.label,
      children: (
        <Carousel
          isSong={true}
          albums={songs.filter((song) => song.genre?.key === genre.key)}
        />
      ),
    })),
  ];

  return (
    <Flex vertical gap={18} className="section">
      <Title type="secondary" level={3} className="title">
        Songs
      </Title>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Tabs defaultActiveKey="all" items={tabItems} />
      )}
    </Flex>
  );
};

export default Songs;
