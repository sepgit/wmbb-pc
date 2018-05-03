/**
 * Created by Zing on 2016/11/16.
 */

import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Hother extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="hother2">
                <li><Link activeClassName="active" to="/Paymenth">我的收付款</Link></li>
                <li>
                    <Link activeClassName="active" to="/cab">我的舱位</Link>
                </li>
                <li>
                    <Link activeClassName="active" to="/meeting">我的会议</Link>
                </li>
            </ul>
        );
    }
}