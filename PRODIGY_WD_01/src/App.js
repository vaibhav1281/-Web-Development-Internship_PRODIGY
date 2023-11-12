import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
    return(
        <div className="">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    { path: "/", element: <App /> },
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)