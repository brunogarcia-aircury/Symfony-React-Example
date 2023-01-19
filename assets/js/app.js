import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Home = React.lazy(()=> import('./Components/Home'));
const HelloForm = React.lazy(()=> import('./Components/HelloForm'));
const HelloFetchForm = React.lazy(()=> import('./Components/HelloFetchForm'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>Custom 404 error</div>,
        children: [
            {
                path: "/hello",
                element:<HelloForm />,
            },
            {
                path: "/hello fetch",
                element:<HelloFetchForm />,
            },
        ]
    },
    // {
    //     path: "/hello",
    //     element:<HelloForm />,
    // },
    // {
    //     path: "/hello fetch",
    //     element:<HelloFetchForm />,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </React.Suspense>
    </React.StrictMode>
);