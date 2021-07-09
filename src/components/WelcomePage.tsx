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
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Checkbox,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useMobileContext } from "../sdk/useMobileContext";
import { SidebarDrawer } from "./SidebarDrawer";

type TWelcomePageProps = {
  setIsLoggedIn: (flag: boolean) => any;
  setActiveForm: (activeForm: string) => any;
};

export const WelcomePage = (props: TWelcomePageProps) => {
  const { setIsLoggedIn, setActiveForm } = props;
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const { isMobile } = useMobileContext();

  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      {!isMobile ? (
        <GridItem rowSpan={12} colSpan={2} bg="white" boxShadow="lg">
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
      ) : (
        <GridItem rowSpan={1} colSpan={12} boxShadow="md">
          <Flex justify="flex-end" placeItems="center" h="100%" pr="5">
            <SidebarDrawer />
          </Flex>
        </GridItem>
      )}

      <GridItem
        colSpan={isMobile ? 12 : 10}
        rowSpan={isMobile ? 2 : 3}
        bg="white"
        p={isMobile ? 2 : 5}
        pl="10"
        boxShadow="md"
        borderRadius="md"
      >
        <SimpleGrid columns={3} spacing={isMobile ? 1 : 3} h="100%">
          <Box height="80px">
            <FormControl id="gradska-četvrt" size="sm">
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
        colSpan={isMobile ? 12 : 10}
        rowSpan={6}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        pr="5"
        overflow="scroll"
      >
        <Table variant="simple" fontSize="sm">
          <Thead bg="gray.100">
            <Tr>
              <Th>Status</Th>
              <Th>Gradska četvrt</Th>
              <Th>Mjesni odbor</Th>
              <Th>Tema</Th>
              <Th>Naselje</Th>
              <Th>Adresa</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox></Checkbox>
              </Td>
              <Td>Novi Zagreb</Td>
              <Td>Blato</Td>
              <Td>Javna rasvjeta</Td>
              <Td>Zagreb</Td>
              <Td>Mladena Fiolića 12i</Td>
              <Td>
                <Badge colorScheme="orange">Glasanje u tijeku</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox isChecked></Checkbox>
              </Td>
              <Td>Stari Zagreb</Td>
              <Td>Blato 2</Td>
              <Td>Kanalizacija</Td>
              <Td>Zagreb</Td>
              <Td>Vladimira Nazora 49b</Td>
              <Td>
                <Badge colorScheme="green">Glasanje završeno</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox isChecked></Checkbox>
              </Td>
              <Td>Srednji Zagreb</Td>
              <Td>Blato 3</Td>
              <Td>Parkovi</Td>
              <Td>Zagreb</Td>
              <Td>Miroslava Krleže 3</Td>
              <Td>
                <Badge colorScheme="green">Glasanje završeno</Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </GridItem>
      <GridItem
        colSpan={isMobile ? 12 : 10}
        rowSpan={3}
        bg="white"
        boxShadow="md"
        borderRadius="lg"
      >
        <AspectRatio ratio={16 / 2} maxH="100%" maxW="100%" h="100%" w="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44943.309951002!2d13.900802207764118!3d45.248664877367816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cae898a00c987%3A0xe853edb3ce9ae4d0!2s52000%2C%20Pazin!5e0!3m2!1sen!2shr!4v1625745529440!5m2!1sen!2shr"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </GridItem>
    </Grid>
  );
};
