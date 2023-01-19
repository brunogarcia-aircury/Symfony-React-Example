import React, {Suspense} from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <Suspense>
            <ul>
                <li><Link to='/hello'>Simple Hello</Link></li>
                <li><Link to='/hello fetch'>Simple Fetch Hello</Link></li>
            </ul>
        </Suspense>;
    }
}