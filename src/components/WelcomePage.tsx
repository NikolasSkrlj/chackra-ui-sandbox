import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  GridItem,
  Grid,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

type TWelcomePageProps = {
  setIsLoggedIn: (flag: boolean) => any;
  setActiveForm: (activeForm: string) => any;
};

export const WelcomePage = (props: TWelcomePageProps) => {
  const { setIsLoggedIn, setActiveForm } = props;
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      <GridItem rowSpan={3} colSpan={2} bg="white" boxShadow="lg">
        <Flex justify="center" h="100%" py="5">
          <Button
            variant="ghost"
            colorScheme="teal"
            isLoading={isLogoutClicked}
            onClick={() => {
              setIsLogoutClicked(true);
              setTimeout(() => {
                setIsLogoutClicked(false);
                setIsLoggedIn(false);
                setActiveForm("login");
              }, 1500);
            }}
            alignSelf="flex-end"
          >
            Odjavi se
          </Button>
        </Flex>
      </GridItem>
      <GridItem colSpan={10} bg="white" />
      <GridItem colSpan={10} bg="white" />
      <GridItem colSpan={10} bg="white">
        {/* <Heading fontSize="x-large" textAlign="center" my="5">
          Dobrodošao, Nikolas!
        </Heading>

        <Text textAlign="center">
          Uspješno si se prijavio, evo slika mačke :D
        </Text> */}
        <AspectRatio ratio={16 / 6} maxH="100%" maxW="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44943.309951002!2d13.900802207764118!3d45.248664877367816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cae898a00c987%3A0xe853edb3ce9ae4d0!2s52000%2C%20Pazin!5e0!3m2!1sen!2shr!4v1625745529440!5m2!1sen!2shr"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </GridItem>
    </Grid>
  );
};
