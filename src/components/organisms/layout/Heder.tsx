import {
  Box,
  Flex,
  Container,
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import { FC } from "react";
import { HomeIcon } from "../../atoms/icon/HomeIcon";
import { TVIcon } from "../../atoms/icon/TVIcon";
import { UserIcon } from "../../atoms/icon/UserIcon";
import { MoonIcon } from "../../atoms/icon/MoonIcon";
import { SunIcon } from "../../atoms/icon/SunIcon";

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            as="h1"
            fontSize="2xl"
            cursor="pointer"
            color={useColorModeValue("gray.600", "white")}
          >
            <Tabs variant="enclosed">
              <TabList>
                <Tab>
                  <HomeIcon />
                </Tab>
                <Tab>
                  <TVIcon />
                </Tab>
                <Tab>
                  <UserIcon />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>ウォッチパーティー掲示板</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Heading>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
