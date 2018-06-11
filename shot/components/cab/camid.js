/**
 * Created by Zing on 2017/4/25.
 */
import React,{Component} from 'react';
import Cabseach from './../cab/cabseach';
import Qgclb from './../comment/qgclb';
import { Link } from 'react-router';

export default class Camid extends Component {
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
        this.props.actions.getfwlx(userName,token);
        //获取起运地目的地
        this.props.actions.getkouan(userName,token);
        this.props.actions.getcarrs(userName,token,0);
    }
    render() {
        return (
            <div className="camid">
                <Qgclb />
                <div className="cab131">
                    当前列表：求舱列表（求舱方发起的求舱保函）
                </div>
                <Cabseach actions={this.props.actions} text={this.props.text} cabnew={this.props.cabnew}/>
            </div>
        );
    }
}