import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import {
  BudgetIcon,
  ChatIcon,
  HomeIcon,
  ProfileIcon,
  ReportIcon,
} from "../util/icons";

export default function Footer() {
  const navList = [
    {
      title: "Home",
      icon: HomeIcon,
      link: "",
    },
    {
      title: "Reports",
      icon: ReportIcon,
      link: "",
    },
    {
      title: "Chat",
      icon: ChatIcon,
      link: "",
    },
    {
      title: "Budget",
      icon: BudgetIcon,
      link: "",
    },
    {
      title: "Profile",
      icon: ProfileIcon,
      link: "",
    },
  ];

  return (
    <Box
      pos={"fixed"}
      bottom="0"
      left="0"
      right="0"
      bg="white"
      backdropFilter="blur(25px)"
      boxShadow="0px -5px 20px 5px rgba(0, 0, 0, 0.04)"
    >
      <Container maxW="container.xl" px={3} pt="24px" pb="18px">
        <Flex align="end" justifyContent="space-between">
          {navList.map((nav, index) => (
            <VStack key={index} gap="10px">
              <nav.icon />
              <Text fontSize="xs">{nav.title}</Text>
            </VStack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
