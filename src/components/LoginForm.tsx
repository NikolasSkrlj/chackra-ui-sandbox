import React, { useState, useEffect } from "react";

import {
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

type TLoginFormProps = {
  setIsLoggedIn: (flag: boolean) => any;
};
const validationSchema = new yup.ObjectSchema({
  email: yup
    .string()
    .email("Unesite ispravan email!")
    .required("Email je obvezno polje!"),
  password: yup.string().required("Lozinka je obavezno polje!"),
});

export const LoginForm = (props: TLoginFormProps) => {
  const { setIsLoggedIn } = props;
  const [isShownPassword, setIsShownPassword] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          setIsLoggedIn(true);
        }, 1500);
      }}
    >
      {(props) => (
        <Form>
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
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl
                    id="email"
                    pr="1"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      ml="1.5"
                      type="email"
                      disabled={props.isSubmitting}
                      spellCheck="false"
                      placeholder="example@domain.com"
                      {...field}
                    />
                    <FormErrorMessage mx="1.5">
                      {form.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl
                    id="password"
                    isInvalid={form.errors.password && form.touched.password}
                  >
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
                        ml="1.5"
                        type={isShownPassword ? "text" : "password"}
                        disabled={props.isSubmitting}
                        spellCheck="false"
                        {...field}
                      />
                    </InputGroup>
                    <FormErrorMessage mx="1.5">
                      {form.errors.password}
                    </FormErrorMessage>
                    <FormHelperText mx="1.5">
                      <Link color="teal.500" fontSize="xs">
                        Zaboravili ste lozinku?
                      </Link>
                    </FormHelperText>
                  </FormControl>
                )}
              </Field>
            </VStack>
            <Button
              mb={10}
              mt={7}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              isFullWidth
            >
              Prijava
            </Button>
            <Text fontSize="sm" textAlign="center">
              Nemaš račun? <Link color="teal.400">Registriraj se</Link>
            </Text>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
