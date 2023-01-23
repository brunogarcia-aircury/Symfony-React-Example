import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const App = React.lazy(()=> import('./js/Components/App'));
const HelloForm = React.lazy(()=> import('./js/Components/HelloForm'));
const HelloFetchForm = React.lazy(()=> import('./js/Components/HelloFetchForm'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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