import { Suspense, useContext, lazy } from "react"; // NPM: React package.
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // NPM: React Router Dom for routing.
import { Flex, Spinner } from "@chakra-ui/react";

/*
* Pages
*/
const ChatPage = lazy(() => import("./pages/chat/index.jsx")); // dynamic import
const SignInPage = lazy(() => import("./pages/signIn/index.jsx")); // dynamic import 

/*
* DATA
*/
import {MyContext} from './context/index.jsx';

/*
* OBJECT
*/
const Index = () => {
  const {data} = useContext(MyContext); // context

/*
* RETURN
*/
  return (
      <Router>
        <Suspense fallback={<Flex w='100vw' h='100vh'><Spinner color="#FFDEC7" mx='auto' my='auto' /></Flex>} >

        <Routes>
          <Route path="/" element={data.isUserLoggedIn ? <ChatPage /> : <Navigate to="/signIn" />} />
          <Route path="/signIn" element={!data.isUserLoggedIn ? <SignInPage /> : <Navigate to="/" />} />
        </Routes>

        </Suspense>
      </Router>
  );
};

/*
* EXPORT
*/
export default Index;
