/**
 * Created by Zing on 2016/6/22.
 */
import React,{Component} from 'react';

export default class Cxtop extends Component {
    render() {
        return (
            <div className="toper">
                <div className="toper1">
                    <img src={require('../../src/image/logoone.png')} className="logo1"/>
                </div>
                <div className="toper2" id="md_top">
                    物贸帮帮
                </div>
                <div className="toper3">
                    <img src={require('../../src/image/iseaone.png')} className="logo2"/>
                    <span>线上服务平台</span>
                </div>
                <div className="toper4">
                    致力于打造物贸信用平台
                </div>
                <div className="toper5">
                    <ul>
                        <li>
                            <span>简体中文</span>
                        </li>
                    </ul>
                    <i>ｖ</i>
                </div>
            </div>
        );
    }
}