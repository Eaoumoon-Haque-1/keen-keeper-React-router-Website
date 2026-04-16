import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes.jsx";
import InteractionsWIthFriendsProvider from "./Context/InteractionsWIthFriendsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InteractionsWIthFriendsProvider>
      <RouterProvider router={router}></RouterProvider>
    </InteractionsWIthFriendsProvider>
  </StrictMode>,
);
