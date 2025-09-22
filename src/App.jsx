import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Sponsorship from "./pages/Sponsorship";
import Speakers from "./pages/Speakers";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/agenda",
          element: <Agenda />,
        },
        {
          path: "/sponsorship",
          element: <Sponsorship />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
