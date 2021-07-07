import React, { useState, useEffect } from "react";

import { ChakraProvider, theme, Flex } from "@chakra-ui/react";

import { LoginForm } from "./components/LoginForm";
import { WelcomePage } from "./components/WelcomePage";
export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center" w="100%" h="100vh" p="5">
        {isLoggedIn ? (
          <WelcomePage setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </Flex>
    </ChakraProvider>
  );
};
