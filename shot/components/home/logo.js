/**
 * Created by Zing on 2016/6/13.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Logos extends Component{
    render() {
        return (
            <div className="logo">
                <Link to="/Home">
                    <img src={require('../../src/image/logo.png')} className="logo1"/>
                    <img src={require('../../src/image/isea.png')} className="logo2"/>
                </Link>
            </div>
        )
    };
}