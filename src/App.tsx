import React, { useState, useEffect } from "react";

import { ChakraProvider, theme, Flex } from "@chakra-ui/react";

import { LoginForm } from "./components/LoginForm";
import { WelcomePage } from "./components/WelcomePage";
import { RegisterForm } from "./components/RegisterForm";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  return (
    <ChakraProvider theme={theme}>
      <Flex
        justify="center"
        align="center"
        w="100%"
        h="100vh"
        //bg="url(https://webgradients.com/public/webgradients_png/089%20Premium%20White.png)"
      >
        {isLoggedIn ? (
          <WelcomePage
            setIsLoggedIn={setIsLoggedIn}
            setActiveForm={setActiveForm}
          />
        ) : (
          <>
            {activeForm === "login" ? (
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                setActiveForm={setActiveForm}
              />
            ) : (
              <RegisterForm
                setIsLoggedIn={setIsLoggedIn}
                setActiveForm={setActiveForm}
              />
            )}
          </>
        )}
      </Flex>
    </ChakraProvider>
  );
};
