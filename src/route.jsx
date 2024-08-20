import { createBrowserRouter } from "react-router-dom";
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import PageTd from "./Pages/PageTd";
import PageTdWithComponants from "./Pages/PageTdWithComponants";
import ListProduit from "./PageCrud/ListProduit";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ListProduit />,
    },
    {
        path: "/page-1",
        element: <Page1 />
    },
    {
        path: "/page-2",
        element: <Page2 />
    },
    {
        path: "/page-3",
        element: <Page3 />
    },
]);

export default router