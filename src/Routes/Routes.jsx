import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import Friend from "../pages/SingleFriend/Friend";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Homepage
            },
            {
                path:"/timeline",
                Component: Timeline
            },
            {
                path:"/stats",
                Component: Stats
            },
            {
                path:"/friend/:id",
                Component: Friend
            },
        ],
        errorElement: <NotFoundPage></NotFoundPage>,
    }
])