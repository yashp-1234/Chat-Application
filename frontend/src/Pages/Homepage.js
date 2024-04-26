import React, { useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Homepage = () => {

  const  history = useHistory();
    
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
        if (!userInfo) history.push("/");
      }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize={"4xl"}
          fontFamily={"Work sans"}
          fontWeight={"400"}
          color={"#2C5282"}
        >
          Web - Chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth={"1px"}
        marginBottom={"40px"}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width={"50%"}>Log In</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
