import { ConfigProvider } from "antd";
import { createContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import TopAlbum from "./components/Albums/TopAlbum";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export const ThemeColorContext = createContext({});

function App() {
  const [tabColor, setTabColor] = useState({
    colorDark: "#000",
    colorPrimary: "#09d936",
    colorWhite: "#fff",
  });

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setTabColor({
      colorDark: rootStyles.getPropertyValue("--color-dark").trim(),
      colorPrimary: rootStyles.getPropertyValue("--color-primary").trim(),
      colorWhite: rootStyles.getPropertyValue("--color-white").trim(),
    });
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
    <ThemeColorContext.Provider value={{ tabColor }}>
      <ConfigProvider theme={themeConfig}>
        <div className="App">
          <Navbar />
          <Hero />
          <TopAlbum />
        </div>
      </ConfigProvider>
    </ThemeColorContext.Provider>
  );
}

export default App;
