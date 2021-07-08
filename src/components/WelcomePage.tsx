import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
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
    <Box
      maxW="lg"
      w="md"
      border="1px"
      borderColor="gray.200"
      px="10"
      py="15"
      borderRadius="xl"
      boxShadow="md"
      bgColor="white"
    >
      <Heading fontSize="x-large" textAlign="center" my="5">
        Dobrodošao, Nikolas!
      </Heading>

      <Text textAlign="center">
        Uspješno si se prijavio, evo slika mačke :D
      </Text>
      <Image
        borderRadius="xl"
        my="5"
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
      ></Image>
      <Flex justify="center" mt="6" mb="2">
        <Button
          variant="outline"
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
        >
          Odjavi se
        </Button>
      </Flex>
    </Box>
  );
};
