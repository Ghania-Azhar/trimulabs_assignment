import { Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
function MainPage() {
  return (
    <Center>
      <Stack>
        <Heading as='h1'>Pokemon API</Heading>
        <SearchBar />
      </Stack>
    </Center>
  );
}

export default MainPage;