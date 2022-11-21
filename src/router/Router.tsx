// import { useBreakpointValue } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/organisms/layout/Footer";
import { Header } from "../components/organisms/layout/Heder";
import { Home } from "../components/pages/Home";

export const Router = () => {
  const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])
  return (
    <BrowserRouter>
      {breakpointValue === "lg" ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {breakpointValue === "lg" ? "" : <Header />}
      <Footer />
    </BrowserRouter>

  );
};
