import { Collapse, ConfigProvider, Flex, Typography } from "antd";
import { useContext } from "react";
import { ThemeColorContext } from "../../App";
import Arrow from "../../assets/images/accordion-arrow.png";
import "./index.css";

const { Panel } = Collapse;
const { Text } = Typography;

const FAQ = () => {
  const { tabColor } = useContext(ThemeColorContext);

  return (
    <Flex vertical gap={24} className="faq-section">
      <Text type="primary" style={{ color: tabColor.colorWhite }}>
        FAQs
      </Text>

      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerBg: tabColor.colorDark,
              contentBg: tabColor.colorWhite,
              colorText: tabColor.colorWhite,
              colorTextHeading: tabColor.colorWhite,
              headerPadding: "20px 28px",
              contentPadding: "20px 28px",
              borderRadiusLG: 8,
            },
          },
        }}
      >
        <Collapse
          accordion
          expandIconPosition="end"
          expandIcon={({ isActive }) =>
            isActive ? (
              <img src={Arrow} alt="accordion-arrow" />
            ) : (
              <img
                src={Arrow}
                style={{ rotate: "180deg" }}
                alt="accordion-arrow"
              />
            )
          }
        >
          <Panel header="Is Qtify free to use?" key="1">
            <Text>Yes! It is 100% free, and has 0% ads!</Text>
          </Panel>

          <Panel header="Can I download and listen to songs offline?" key="2">
            <Text>
              Sorry, downloads are not available — you can stream anytime
              online.
            </Text>
          </Panel>
        </Collapse>
      </ConfigProvider>
    </Flex>
  );
};

export default FAQ;
