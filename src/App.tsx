import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Card from "./component/card";
import Deck from "./component/deck";
import GameScreen from "./screen/gameScreen";
import LogInScreen from "./screen/loginScreen";
import { useState } from "react";

function App() {

  const [useName, setUserName] = useState<string>("");

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LogInScreen setUserName={setUserName} useName={useName}/>
    },
    {
      path: "/game",
      element: <GameScreen name={useName}/>
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
