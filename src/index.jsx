import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./index.app.jsx";
import UserContext from './context/index.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext >
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </UserContext>
);
