import { useState, useEffect, useMemo, Fragment, useContext } from "react";
import { Flex, Text, Input, IconButton, Select, FormLabel, Avatar, useDisclosure } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

/*
 * DATA
 */
import chatLines, { themes, chatDelayList } from "./../../data.js";
import { MyContext } from "./../../context/index.jsx";

/*
 * COMPONENTS
 */
import ChatBubble from "./../../components/chatBubble/index.jsx";
import UserProfileModal from '../../components/userProfileModal/index.jsx';

/*
* OBJECT
*/
const Index = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const { data, updateContext } = useContext(MyContext); // context 
  const { theme, chatDelay, userName } = data; 
  const [loading, setLoading] = useState(false);
  const [userChat, setUserChat] = useState("");
  const [chatsList, setChatsList] = useState([]);
  const [count, setCount] = useState(0);

  const _handleAutomatedChat = useMemo(()=> {

    /* picking chat text from chatLines using the count as index 
    /* pushing the text in the chatsList state
    */
    setChatsList([...chatsList, chatLines[count]])

  }, [count]) // passing the dependency of the count, function runs on the count change


  // function to handle the user text input 
  const _HandleUserText = () => {

    //creating a new array of the previous chats and new user chat from input
    let temp = [...chatsList, { user: "user2", message: userChat, type: "text" }];

    // passing the temp in chatsList state  
    setChatsList(temp);

    // emptying the userchat state on the message send
    setUserChat("");
  };


  // function which handles theme change select bar
  const _HandleThemeChange = (themeId) => {

    // filtering the predefined themes list and finding out the selected theme ( on the basis of themeid ) 
    let selectedTheme = themes.filter((item) => item.id === themeId);

    // updating the theme in context state
    updateContext({ theme: selectedTheme?.[0] });
  };

  // function which handles the change delay select bar
  const _HandleChatDelay = (millisecond) => {

    // updating the chatDelay state in the context
    updateContext({ chatDelay: millisecond});
  };
  

  useEffect(() => {
    
    // setting the loading state to true to show the chat loading animation
    setLoading(true);

    /* Start interval when component mounts
    /* increasing the count on the interval of selected chatDelay
    */
    const intervalId = setInterval(() => {setCount((prev) => prev + 1)}, chatDelay);

    return () => {
      // Clear interval when component unmounts
      clearInterval(intervalId);

      // setting the loading state to false
      setLoading(false);
    };
  }, [userChat, chatDelay]); // passing dependency of userChat and chatDelay

  /*
  * RETURN
  */
  return (
    <Flex w="100vw" h="100vh" display="flex" justify="center" alignItems="center" bg="white" flexDir="column" >

      <UserProfileModal isOpen={isOpen} onClose={onClose} />

      <Flex w="40%" gap='20px'>

      <Flex  mb="10px" flexDir="column">
        <FormLabel>Select Theme</FormLabel>
        <Select w="200px" value={theme.id} onChange={(e) => _HandleThemeChange(e.target.value)} >
          {themes.map((item) => (
            <option key={uuidv4()} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex w="40%" mb="10px" flexDir="column">
        <FormLabel>Select Chat Delay</FormLabel>
        <Select w="200px" value={chatDelay} onChange={(e) => _HandleChatDelay(e.target.value)} >
          {chatDelayList.map((item) => (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex  w='100%'justify='flex-end' alignItems='center' gap='5px'>
        <Text>{userName}</Text>
        <Avatar cursor='pointer' onClick={()=> onOpen()} name='Your Name' src={data.pfp ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
      </Flex>

      </Flex>
      
      <Flex flexDir="column" h="90%" position="relative" w="40%" bg={`linear-gradient(239.26deg, ${theme.color1} 63.17%, ${theme.color2} 94.92%)`} >
        <Flex w="fitContent" justify="space-between" flexDir="column" h="100%">

          <Flex p="20px" flexDir="column" gap="10px" overflow="scroll">
            {chatsList.map((item) => (
              <Fragment key={uuidv4()}>
                <ChatBubble content={item} />
              </Fragment>
            ))}
            {loading && <ChatBubble loading={true} />}
          </Flex>

          <form onSubmit={(e) => { _HandleUserText(); e.preventDefault()}} >
            <Flex gap="10px" px="10px" py="10px" w="100%" zIndex="2" position="sticky" bottom="0" >

              <Input borderRadius="15px" h="50px" bg="white" value={userChat} onChange={(e) => { setUserChat(e.target.value); setLoading(false)}} />

              <IconButton onClick={() => _HandleUserText()} w="55px" h="50px" borderRadius="50%" bg="white" _hover={{ bg: "white" }} >
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/sent.png" alt="sent" />
              </IconButton>

            </Flex>
          </form>

        </Flex>
      </Flex>
    </Flex>
  );
};

/*
* EXPORT
*/
export default Index;
