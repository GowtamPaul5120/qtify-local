import { Flex, Typography } from "antd";
import "./index.css";
import { Chip } from "@mui/material";
import { useContext } from "react";
import { ThemeColorContext } from "../../../App";

const { Title } = Typography;

const AlbumCard = ({ album }) => {
  const tabColor = useContext(ThemeColorContext);
  return (
    <Flex vertical gap={12}>
      <Flex vertical className="album-card">
        <img src={album.image} alt="album-cover" className="album-image" />
        <Chip
          className="follows"
          label={`${album.follows} Follows`}
          sx={{
            backgroundColor: tabColor.colorDark,
            color: tabColor.colorWhite,
            borderRadius: "10px",
            "& .MuiChip-label": {
              padding: "0 10px",
            },
            width: "fit-content",
            margin: "6px 8px",
          }}
        />
      </Flex>
      <Title
        level={5}
        type="secondary"
        className="album-name"
        style={{ margin: 0 }}
      >
        {album.title}
      </Title>
    </Flex>
  );
};

export default AlbumCard;
