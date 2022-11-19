import { Header } from "../organisms/layout/Heder";
import {
  Center,
  Text,
  Stack
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Header />
      <Center>
        <Stack spacing={3}>
          <Text fontSize="6xl">ここは何なの？</Text>
          <Text fontSize="5xl">(5xl) In love with React & Next</Text>
          <Text fontSize="4xl">(4xl) In love with React & Next</Text>
          <Text fontSize="3xl">(3xl) In love with React & Next</Text>
          <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        </Stack>
      </Center>
    </>
  );
};
