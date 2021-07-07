import React, { useState, useEffect } from "react";

import { ChakraProvider, theme, Flex } from "@chakra-ui/react";

import { LoginForm } from "./components/LoginForm";
export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center" w="100%" h="100vh" p="5">
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </Flex>
    </ChakraProvider>
  );
};
