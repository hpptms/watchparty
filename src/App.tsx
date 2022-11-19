import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import { theme } from "./theme/theme";

export const App = () => {
  console.log("18テスト");
  return (
    <RecoilRoot>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </UserProvider>
    </RecoilRoot>
  );
};
