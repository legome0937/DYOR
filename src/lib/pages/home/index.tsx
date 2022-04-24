import { useColorModeValue, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    />
  );
};

export default Home;
