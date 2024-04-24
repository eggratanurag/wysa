import {  Card, CardBody, Text, Image } from "@chakra-ui/react";

/*
* COMPONENTS
*/
import LoadingAnimation from './../loading/index.jsx';

/*
* OBJECT
*/
function Index({content, loading}) {
  
  if (loading) {

    // if loading is true return the chat bubble with a loading animation
    return (
      <Card background='white' width="200px" h='60px'>
        <CardBody minH='50px'>
          <LoadingAnimation />
        </CardBody>
      </Card>
    )
  }

/*
* RETURN
*/
  return (
    <Card alignSelf={content.user === "user2" && "end"} background='white' maxW='500px' width="fit-content">
      <CardBody >
        {(content.type === "image" || content.type === "both") && <Image src={content.imgUrl} mb='10px' w='100%'/>}
        {(content.type === "text" || content.type === "both") && <Text>{content.message}</Text>}
      </CardBody>
    </Card>
  );
}

/*
* EXPORT
*/
export default Index;
