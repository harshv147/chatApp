import React from 'react';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import {Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Homepage = () => {
  const navigate = useNavigate();
   useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if(user) navigate('/chats');
   }, [navigate]); 

  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text 
          fontSize='4xl' 
          fontFamily="Work Sans" 
          color="black"
        >
          Talk-a-tive
        </Text>
      </Box>
      <Box w="100%" bg="white" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant='soft-rounded'>
        <TabList mb="1em">
        <Tab width="50%">Sign In</Tab>
        <Tab width="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
        <TabPanel><Login/></TabPanel>
        <TabPanel><SignUp/></TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
