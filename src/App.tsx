import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Divider,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const App = () => {
  const [isShownPassword, setIsShownPassword] = React.useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center" w="100%" h="100vh" p="5">
        <Box
          maxW="lg"
          w="md"
          border="1px"
          borderColor="gray.200"
          px="10"
          py="15"
          borderRadius="xl"
          boxShadow="md"
        >
          <Heading fontSize="x-large" textAlign="center" my="5">
            Prijavi se
          </Heading>
          <VStack spacing="4">
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input mx="1.5" type="email" spellCheck="false" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Lozinka</FormLabel>
              <InputGroup>
                <InputRightElement
                  cursor="pointer"
                  onClick={() => setIsShownPassword(!isShownPassword)}
                  children={
                    isShownPassword ? (
                      <FaEyeSlash color="lightgrey" size="20px" />
                    ) : (
                      <FaEye color="lightgrey" size="20px" />
                    )
                  }
                  pr="3"
                />
                <Input
                  mx="1.5"
                  type={isShownPassword ? "text" : "password"}
                  pr="40"
                  spellCheck="false"
                />
              </InputGroup>

              <FormHelperText mx="1.5">
                <Link color="teal.500" fontSize="xs">
                  Zaboravili ste lozinku?
                </Link>
              </FormHelperText>
            </FormControl>
          </VStack>
          <Button my="10" w="100%" colorScheme="teal">
            Prijava
          </Button>
          <Text fontSize="sm" textAlign="center">
            Nemaš račun? <Link color="teal.400">Registriraj se</Link>
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
