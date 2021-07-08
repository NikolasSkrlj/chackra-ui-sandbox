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
  Checkbox,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

type TLoginFormProps = {
  setIsLoggedIn: (flag: boolean) => any;
  setActiveForm: (activeForm: string) => any;
};

const validationSchema = new yup.ObjectSchema({
  email: yup
    .string()
    .email("Unesite ispravan email!")
    .required("Email je obvezno polje!"),
  password: yup.string().required("Lozinka je obavezno polje!"),
  firstName: yup.string().required("Ime i prezime je obvezno polje!"),
});

export const RegisterForm = (props: TLoginFormProps) => {
  const { setIsLoggedIn, setActiveForm } = props;
  const [isShownPassword, setIsShownPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        areTermsAgreed: false,
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
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
            bgColor="white"
          >
            <Heading fontSize="x-large" textAlign="center" my="5">
              Registriraj se
            </Heading>

            <VStack spacing="3">
              <Field name="firstName">
                {({ field, form }: any) => (
                  <FormControl
                    id="firstName"
                    pr="1"
                    isInvalid={form.errors.firstName}
                    isRequired
                  >
                    <FormLabel htmlFor="firstName">Ime</FormLabel>
                    <Input
                      id="firstName"
                      fontSize="sm"
                      type="text"
                      disabled={props.isSubmitting}
                      spellCheck="false"
                      placeholder="Ime"
                      {...field}
                    />
                    <FormErrorMessage mx="1.5">
                      {form.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastName">
                {({ field, form }: any) => (
                  <FormControl
                    id="lastName"
                    pr="1"
                    isInvalid={form.errors.lastName}
                  >
                    <FormLabel htmlFor="lastName"> Prezime</FormLabel>
                    <Input
                      id="lastName"
                      fontSize="sm"
                      type="text"
                      disabled={props.isSubmitting}
                      spellCheck="false"
                      placeholder="Prezime"
                      {...field}
                    />
                    <FormErrorMessage mx="1.5">
                      {form.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl
                    id="email"
                    pr="1"
                    isInvalid={form.errors.email}
                    isRequired
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      fontSize="sm"
                      disabled={props.isSubmitting}
                      spellCheck="false"
                      placeholder="primjer@domena.com"
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
                    isInvalid={form.errors.password}
                    isRequired
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
                        type={isShownPassword ? "text" : "password"}
                        disabled={props.isSubmitting}
                        spellCheck="false"
                        fontSize="sm"
                        placeholder="Mora imati najmanje 6 znakova"
                        {...field}
                      />
                    </InputGroup>
                    <FormErrorMessage mx="1.5">
                      {form.errors.password}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="areTermsAgreed">
                {({ field, form }: any) => (
                  <FormControl
                    id="areTermsAgreed"
                    isInvalid={form.errors.areTermsAgreed}
                    fontSize="sm"
                  >
                    <Checkbox
                      colorScheme="teal"
                      size="lg"
                      mt="2.5"
                      isChecked={props.values.areTermsAgreed}
                      id="areTermsAgreed"
                      onChange={(val) =>
                        props.setFieldValue(
                          "areTermsAgreed",
                          !props.values.areTermsAgreed
                        )
                      }
                    >
                      <Text fontSize="sm">
                        Prihvaćam{" "}
                        <Link
                          color="teal.400"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                          }}
                        >
                          uvjete korištenja
                        </Link>
                      </Text>
                    </Checkbox>
                    <FormErrorMessage mx="1.5">
                      {form.errors.areTermsAgreed}
                    </FormErrorMessage>
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
              isDisabled={!props.values.areTermsAgreed}
            >
              Registracija
            </Button>
            <Text fontSize="sm" textAlign="center">
              Natrag na {"  "}
              <Link color="teal.400" onClick={() => setActiveForm("login")}>
                prijavu
              </Link>
            </Text>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
