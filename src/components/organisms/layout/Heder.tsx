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
  TabPanel,
  Spacer,
  useBreakpointValue
} from "@chakra-ui/react";
import { FC } from "react";
import { HomeIcon } from "../../atoms/icon/HomeIcon";
import { TVIcon } from "../../atoms/icon/TVIcon";
import { UserIcon } from "../../atoms/icon/UserIcon";
import { MoonIcon } from "../../atoms/icon/MoonIcon";
import { SunIcon } from "../../atoms/icon/SunIcon";
import { Time } from "../../atoms/function/Time";
import { css } from "@emotion/react";

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} css={breakpointValue !== 'lg' ? Mobile : ""}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Heading
            as="h1"
            fontSize="2xl"
            cursor="pointer"
            w="100%"
            color={useColorModeValue("gray.600", "white")}>
            <Tabs >
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
                <Spacer />
                <Box>Current Size:{breakpointValue}</Box>
                {breakpointValue === "lg" ? <Time /> : ""}
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
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
        </Flex>
      </Container>
    </Box>
  );
};

const Mobile = css({
  position: 'sticky',
  zindex: '99',
  width: '100%',
  bottom: '0px'
});