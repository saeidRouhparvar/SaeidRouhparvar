import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/header/Navbar";
// import { indexRoutes } from "./routes";
import Introduction from "./components/header/Introduction";
import Projects from "./components/project/Projects";
import Experiences from "./components/experience/Experiences";

const App = () => {
  return (
    <ChakraProvider>
      {/* <Routes> */}
        {/* {indexRoutes.map((index,key) => {
          return (
            <Route path={index.path} key={key} />
          )
        })} */}
        {/* <Route path="/" element={<Navbar type={"Main"}/>}/> */}
        {/* <Route path="/" element={<Introduction/>}/> */}
      {/* </Routes> */}

      <Navbar/>
      <Introduction/>
      <Projects/>
      <Experiences/>
    </ChakraProvider>
  );
};

export default App;
