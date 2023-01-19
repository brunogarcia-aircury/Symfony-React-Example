import React, {Suspense} from "react";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Suspense>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hello'>Simple Hello</Link></li>
                <li><Link to='/hello fetch'>Simple Fetch Hello</Link></li>
                <li><Link to='/_error/404'>Dev 404 error</Link></li>
            </ul>
            <hr />
            <div>
                <Outlet />
            </div>
        </Suspense>;
    }
}