/**
 * Created by Zing on 2016/6/22.
 */
import React,{Component} from 'react';
import Logo from '../home/logo';
import Down from '../login/down';

export default class Ltop extends Component {
    render() {
        return (
            <div className="toper">
                <Logo />
                <Down />
            </div>
        );
    }
}