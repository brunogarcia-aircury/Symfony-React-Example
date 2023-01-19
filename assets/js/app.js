import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Hello = React.lazy(()=> import('./Components/Hello'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Hello />,
    },
    {
        path: "/test",
        element: <h1>This is a test</h1>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);