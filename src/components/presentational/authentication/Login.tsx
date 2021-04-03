import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
interface LoginViewProps {
  onChange: (e: React.ChangeEvent<any>) => void;
  values: {
    email: string;
    password: string;
  };
  errors: {
    email: string | undefined;
    password: string | undefined;
  };
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  errors,
  onChange,
  onSubmit,
  values,
}) => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading textTransform="capitalize" fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to view and place orders
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={onChange}
                value={values.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={onChange}
                value={values.password}
                type="password"
              />
            </FormControl>
            <Stack spacing={5}>
              <Box />
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={(e: any) => onSubmit(e)}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginView;
