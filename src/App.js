import { ConfigProvider } from "antd";
import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import Song from "./components/Albums/Song";
import TopAlbum from "./components/Albums/TopAlbum";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export const ThemeColorContext = createContext({});

function App() {
  const [tabColor, setTabColor] = useState({
    colorDark: "#000",
    colorPrimary: "#09d936",
    colorWhite: "#fff",
  });
  const [allAlbums, setAllAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );
      if (response.data.length > 0) {
        setAllAlbums(response.data);
      } else {
        setAllAlbums([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setTabColor({
      colorDark: rootStyles.getPropertyValue("--color-dark").trim(),
      colorPrimary: rootStyles.getPropertyValue("--color-primary").trim(),
      colorWhite: rootStyles.getPropertyValue("--color-white").trim(),
    });

    fetchAlbums();
  }, []);

  const themeConfig = useMemo(
    () => ({
      components: {
        Tabs: {
          colorBorderSecondary: tabColor.colorDark,
          inkBarColor: tabColor.colorPrimary,
          itemHoverColor: tabColor.colorPrimary,
          itemSelectedColor: tabColor.colorWhite,
          itemColor: tabColor.colorWhite,
          horizontalItemPadding: "12px 20px",
        },
      },
    }),
    [tabColor],
  );

  return (
    <ThemeColorContext.Provider value={{ tabColor, allAlbums, isLoading }}>
      <ConfigProvider theme={themeConfig}>
        <div className="App">
          <Navbar />
          <Hero />
          <TopAlbum />
          <Song />
          <FAQ />
        </div>
      </ConfigProvider>
    </ThemeColorContext.Provider>
  );
}

export default App;
