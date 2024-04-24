import React, {useState} from "react";
import { Flex, Input, Text, Button, FormControl, FormLabel, Box, useColorModeValue, Heading, InputGroup, InputRightElement, SimpleGrid, Image } from "@chakra-ui/react";
import { useContext } from 'react';

/*
* DATA
*/
import {MyContext} from './../../context/index.jsx';

/*
* OBJECT
*/
const Index = () => {
  const { updateContext } = useContext(MyContext); // context 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const [show, setShow] = React.useState(false);
  
  // function to handle the email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // function to handle the password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // function to handle the submit
  const handleSubmit = () => {
    updateContext({isUserLoggedIn: true})

  };


  /*
  * RETURN
  */
  return (
    <SimpleGrid columns={2} minH='100vh'> 
    <Flex h='100%' justify='center' alignItems='center' >
      <Flex flexDir='column'>

      <Box me="auto">
        <Heading color={textColor} fontSize="36px" mb="10px">
          Login
        </Heading>
        <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md" >
          Enter your email and password to Sign in.
        </Text>
      </Box>
      
      <Flex direction="column" minW="420px" >
        <form onSubmit={(e) => { handleSubmit(); e.preventDefault()}} >

          {/* email input group */}
          <FormControl isRequired>
            <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={"navy.700"} mb="8px" >
              Email
            </FormLabel>
            <Input
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="mail@workemail.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          {/* password input group */}
          <FormControl isRequired>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={"navy.700"}
              display="flex"
            >
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                id="signInPassword"
                fontSize="sm"
                placeholder="Min. 6 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Button onClick={()=> setShow(!show)} mr='20px' h='30px' w='100px' fontSize='12px' >{show ? "Hide" : "Show"}</Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {/* forgot password link */}
          <Flex justifyContent="space-between" align="center" mb="24px">
              <Text fontSize="sm" w="124px" color="#073298" fontWeight="500" >
                Forgot password?
              </Text>
          </Flex>

          {/* form submit button */}
          <Button
            w="100%"
            h="50px"
            type="submit"
            mb="24px"
            bg="linear-gradient(0.40turn, #0562ab, #0093bf)"
            _hover={{bg: "linear-gradient(0.40turn, #0562ab, #0093bf)", boxShadow: "md"}}
            color='white'
          >
            Login
          </Button>
        </form>

        <Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px" >
          <Text color={textColorDetails} fontWeight="400" fontSize="14px">
            Not registered yet?
              <Text color="#073298" as="span" ms="5px" fontWeight="500">
                Create an Account
              </Text>
          </Text>
        </Flex>

      </Flex>
      </Flex>
    </Flex>
     
    {/* gradient background */}
    <Flex color='white' h='100%' background="linear-gradient(0.25turn, #073298, #0093bf)" display='flex' justifyContent='center' alignItems='center'>
      <Flex px='40px' flexDir='column'>
        <Image src="https://cdn.wysa.io/logos/logo.png"  w='200px'/>
        <Text fontSize='50px' fontWeight='700'>Mental health that meets people where they are</Text>
        <Text fontSize='25px' mt='20px' >Completely anonymous. No stigma. No limits.</Text>
        <Text fontSize='15px'>Wysa's clinically validated AI gives immediate support as the first step of care, and human coaching for those who need more. Transform how supported your teams and families feel.</Text>
      </Flex>
    </Flex>

    </SimpleGrid>
  );
}

/*
* EXPORT
*/
export default Index;
