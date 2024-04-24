import {Flex} from "@chakra-ui/react"
import './index.css' // css

function Index(loading) {

  return (loading && <Flex className="loader">
        <Flex className="loading one"></Flex>
        <Flex className="loading two"></Flex>
        <Flex className="loading three"></Flex>
        <Flex className="loading four"></Flex>
      </Flex>
  );
}

export default Index;
