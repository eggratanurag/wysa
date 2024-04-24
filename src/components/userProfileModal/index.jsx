import { useState, useContext } from "react"
import { Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Input, FormLabel } from "@chakra-ui/react";

/*
 * COMPONENTS
*/
import ImageUploadInput from './../customInputs/index.jsx';

/*
* DATA
*/
import { MyContext } from "./../../context/index.jsx";

/*
* OBJECT
*/
const Index = ({ isOpen, onClose }) => {
  const { data, updateContext } = useContext(MyContext) // context
  const [userName, setUserName] = useState(data.userName)
  const [userProfile, setUserProfile] = useState(data.pfp)
  
  // function to handle the profile pic upload
  const _HandleProfilePicUpload = (event) => {
    
    let selectedFile = event.target.files[0]
    // creating a object url of the image file and setting it in a local state
    setUserProfile(URL.createObjectURL(selectedFile))
  }

  // function to delete the profile pic
  const _HandleProfilePicDelete = () => {
 
    // updating the pfp state in redux to null
    updateContext({pfp: null})
    setUserProfile(null)
  }

  // function to handle the profile data update
  const _HandleUpdateProfile = () => {

    // updating the context state
    updateContext({pfp: userProfile, userName: userName })

    // closing the modal
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir='column' alignItems='center'>
              <Image
                w="200px"
                h="200px"
                borderRadius="50%"
                src={userProfile ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              />
              <Flex gap='10px' my='20px'>
                 <ImageUploadInput onChangeFunc={_HandleProfilePicUpload}/>
                 <Button onClick={()=> _HandleProfilePicDelete()} h='44px'>Delete</Button>
              </Flex>

              <FormLabel display="flex" ms="4px" alignSelf='start' fontSize="sm" fontWeight="500" mb="8px" >
                Your Name
              </FormLabel>
              <Input
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="Anurag Ojha"
                mb="24px"
                fontWeight="500"
                size="lg"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=> _HandleUpdateProfile()} colorScheme="blue" mr={3} >
              Update
            </Button>
          </ModalFooter>
          
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
