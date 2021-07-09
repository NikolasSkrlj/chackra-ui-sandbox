import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Text,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaHamburger, FaBars } from "react-icons/fa";
export const SidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        onClick={onOpen}
      >
        <FaBars size={30} color="gray" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex align="center" pt="4" justifyContent="space-evenly">
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
          </DrawerHeader>

          <DrawerBody>
            <Flex justify="center" h="100%" py="5" direction="column">
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
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex direction="column" align="center" w="100%">
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
                /* isLoading={isLogoutClicked}
              onClick={() => {
                  setIsLogoutClicked(true);
                  setTimeout(() => {
                      setIsLogoutClicked(false);
                      setIsLoggedIn(false);
                      setActiveForm("login");
                    }, 1500);
                }} */
                fontSize="sm"
                justifySelf="flex-end"
              >
                Odjavi se
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
