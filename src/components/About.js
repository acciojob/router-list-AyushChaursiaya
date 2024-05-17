import React from "react";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import { Link } from "react-router-dom";

const About = () => {
    return (<div>
        <h1>Item List</h1>
        <ul>
            <li>
                <Link to='item1'>Item 1</Link>
            </li>
            <li>
                <Link to='item2'>Item 2</Link>
            </li>
            <li>
                <Link to='item3'>Item 3</Link>
            </li>
        </ul>
    </div>)
}

export default About;