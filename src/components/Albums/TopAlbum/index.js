import { Button, Flex, Typography } from "antd";
import cover1 from "../../../assets/images/cover1.png";
import cover2 from "../../../assets/images/cover2.png";
import cover3 from "../../../assets/images/cover3.png";
import cover4 from "../../../assets/images/cover4.png";
import cover5 from "../../../assets/images/cover5.png";
import cover6 from "../../../assets/images/cover6.png";
import cover7 from "../../../assets/images/cover7.png";
import cover8 from "../../../assets/images/cover8.png";
import AlbumCard from "../AlbumCard";
import "../index.css";

const { Text } = Typography;

export const topAlbums = [
  {
    id: 1,
    image: cover1,
    follows: "100 Follows",
    name: "New Bollywood",
    genre: "Rock",
  },
  {
    id: 2,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Pop",
  },
  {
    id: 3,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Jazz",
  },
  {
    id: 4,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Blues",
  },
  {
    id: 5,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Rock",
  },
  {
    id: 6,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Pop",
  },
  {
    id: 7,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Jazz",
  },
  {
    id: 8,
    image: cover3,
    follows: "100 Follows",
    name: "New Bollywood",
    genre: "Blues",
  },
  {
    id: 9,
    image: cover4,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Rock",
  },
  {
    id: 10,
    image: cover5,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Pop",
  },
  {
    id: 11,
    image: cover6,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Jazz",
  },
  {
    id: 12,
    image: cover7,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Blues",
  },
  {
    id: 13,
    image: cover8,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Rock",
  },
  {
    id: 14,
    image: cover2,
    follows: "100 Follows",
    name: "New English Songs",
    genre: "Pop",
  },
];

const TopAlbum = () => {
  return (
    <Flex vertical gap={18} className="section">
      <Flex align="center" justify="space-between">
        <Text className="sub-heading">Top Albums</Text>
        <Button type="link">Collapse</Button>
      </Flex>

      <div className="album-grid">
        {topAlbums.map((album) => {
          return <AlbumCard album={album} />;
        })}
      </div>
    </Flex>
  );
};

export default TopAlbum;
