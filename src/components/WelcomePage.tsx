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
  Divider,
  Spacer,
  Avatar,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Input,
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
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      <GridItem rowSpan={6} colSpan={2} bg="white" boxShadow="lg">
        <Flex justify="center" h="100%" py="5" direction="column">
          <Flex align="center" p="3" justifyContent="space-evenly">
            <Avatar
              size="lg"
              name="Nikolas Škrlj"
              src="https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png"
            />

            <Flex direction="column">
              <Heading fontSize="md" isTruncated>
                Nikolas Škrlj
              </Heading>
              <Text fontSize="sm" color="gray.500" isTruncated>
                Novi Zagreb - zapad
              </Text>
              <Text fontSize="sm" color="gray.500">
                Blato
              </Text>
            </Flex>
          </Flex>
          <Divider></Divider>

          <Flex direction="column" pt="5">
            <Button
              variant="ghost"
              colorScheme="teal"
              fontSize="sm"
              color="gray"
            >
              Inicijative
            </Button>
            <Button
              variant="ghost"
              colorScheme="teal"
              fontSize="sm"
              color="gray"
            >
              Gradske četvrti
            </Button>
            <Button
              variant="ghost"
              colorScheme="teal"
              fontSize="sm"
              color="gray"
            >
              Mjesni odbori
            </Button>
            <Button
              variant="ghost"
              colorScheme="teal"
              fontSize="sm"
              color="gray"
            >
              Moja aktivnost
            </Button>
          </Flex>

          <Spacer />

          <Button
            variant="ghost"
            colorScheme="teal"
            justifySelf="flex-end"
            fontSize="sm"
            color="gray"
          >
            Moj račun
          </Button>
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
            fontSize="sm"
            justifySelf="flex-end"
          >
            Odjavi se
          </Button>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={10}
        rowSpan={1}
        bg="white"
        p="5"
        boxShadow="md"
        borderRadius="md"
      >
        <SimpleGrid columns={3} spacing={3} h="100%">
          <Box height="80px">
            <FormControl id="gradska-četvrt">
              <FormLabel>Gradska četvrt</FormLabel>
              <Select placeholder="Odaberi...">
                <option>Novi Zagreb</option>
                <option>Stari Zagreb</option>
              </Select>
            </FormControl>
          </Box>
          <Box height="80px">
            <FormControl id="tema">
              <FormLabel>Tema</FormLabel>
              <Select placeholder="Odaberi...">
                <option>Javna rasvjeta</option>
                <option>Kanalizacija</option>
                <option>Parkovi</option>
              </Select>
            </FormControl>
          </Box>
          <Box height="80px">
            <FormControl id="datum">
              <FormLabel>Datum</FormLabel>
              <Input placeholder="DD.MM.YYYY" />
            </FormControl>
          </Box>
          <Box height="80px">
            <FormControl id="mjesni-odbor">
              <FormLabel>Mjesni odbor</FormLabel>
              <Select placeholder="Odaberi...">
                <option>Blato</option>
                <option>Blato 2</option>
              </Select>
            </FormControl>
          </Box>
          <Box height="80px">
            <FormControl id="status">
              <FormLabel>Status</FormLabel>
              <Select placeholder="Odaberi...">
                <option>Glasanje završeno</option>
                <option>Glasanje u tijeku</option>
              </Select>
            </FormControl>
          </Box>
        </SimpleGrid>
      </GridItem>
      <GridItem
        colSpan={10}
        rowSpan={3}
        bg="white"
        boxShadow="md"
        borderRadius="md"
      />
      <GridItem
        colSpan={10}
        rowSpan={2}
        bg="white"
        boxShadow="md"
        borderRadius="lg"
      >
        <AspectRatio ratio={16 / 3} maxH="100%" maxW="100%" h="100%" w="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44943.309951002!2d13.900802207764118!3d45.248664877367816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cae898a00c987%3A0xe853edb3ce9ae4d0!2s52000%2C%20Pazin!5e0!3m2!1sen!2shr!4v1625745529440!5m2!1sen!2shr"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </GridItem>
    </Grid>
  );
};
