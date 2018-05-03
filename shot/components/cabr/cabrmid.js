/**
 * Created by Zing on 2017/5/18.
 */
import React,{Component} from 'react';
import Cabrseach from './cabrseach';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';

export default class Cabrmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    componentDidMount(){
        let userName = this.state.userName;
        let token = this.state.token;
        //获取服务列表
        this.props.actions.getfwlxr(userName,token);
        //获取起运地目的地
        this.props.actions.getkouanr(userName,token);
    }
    render() {
        return (
            <div className="camid">
                <Qgclb />
                <div className="cab131">
                    当前列表：供舱列表（求舱方发起的供舱保函）
                </div>
                <Cabrseach actions={this.props.actions} text={this.props.text} cabrnew={this.props.cabrnew}/>
            </div>
        );
    }
}