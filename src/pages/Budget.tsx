import React from "react";
import {
  Box,
  Text,
  Flex,
  Circle,
  Container,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Heading,
  Button,
} from "@chakra-ui/react";
import { NairaIcon, ThreeDots } from "../util/icons";
import TabContent from "../components/TabContent";
import Footer from "../components/Footer";

export default function Budget() {
  return (
    <Container maxW="container.xl" px={3} pb="28" pt={["3", "5"]}>
      <Heading
        fontFamily="csBold"
        fontSize={"28px"}
        lineHeight={"36px"}
        mb={"7"}
      >
        Budget
      </Heading>

      <Flex align="center" gap="2" mb="5">
        <Circle size={5} bg="#0466C833">
          <NairaIcon />
        </Circle>
        <Text color="#707480" fontSize="sm">
          Monthly Budget
        </Text>
      </Flex>

      <Box
        bg="white"
        fontFamily="csBold"
        fontSize={"28px"}
        lineHeight={"36px"}
        boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
        borderRadius="10px"
        p="9px 20px"
        mb="30px"
      >
        ₦120,000
      </Box>

      <div className="monthlyTab">
        <Tabs position="relative" variant="unstyled">
          <TabList gap="30px">
            <Tab color="#707480" px="0" _selected={{ color: "#0466C8" }}>
              Last Month
            </Tab>
            <Tab color="#707480" px="0" _selected={{ color: "#0466C8" }}>
              This Month
            </Tab>
            <Button bg="transparent" ml="auto">
              <ThreeDots />
            </Button>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            width="30px"
            bg="#0466C8"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <TabContent reading={30} />
            </TabPanel>
            <TabPanel>
              <TabContent />
            </TabPanel>
            {/* <TabPanel>
            <p>three!</p>
          </TabPanel> */}
          </TabPanels>
        </Tabs>
      </div>
      <Footer />
    </Container>
  );
}
