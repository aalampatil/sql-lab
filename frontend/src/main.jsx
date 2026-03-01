import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AssignmentPage } from "./pages/AssignmentPage.jsx";
import Hero from "./components/Hero.jsx";
import { DataContextProvider } from "./context/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/assignment-page",
        element: <AssignmentPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <RouterProvider router={router} />
  </DataContextProvider>,
);
