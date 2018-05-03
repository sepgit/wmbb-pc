/**
 * Created by Zing on 2016/7/20.
 */
import React,{Component} from 'react';
import Xseach from './xseach.js';
import { Link } from 'react-router';

export default class Xmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            enqu:sessionStorage.getItem("SESSIONSYSENQU"),
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid : sessionStorage.getItem("SESSIONUSER"),
            comp : sessionStorage.getItem("SESSIONCOMP")
        }
    }
    componentDidMount(){
        let userName = this.state.userName;
        let token = this.state.token;
        let userid = this.state.userid;
        let comp =  this.state.comp;
        this.props.actions.getser(userName,token,1);//获取服务
        this.props.actions.getxpeo(userName,token,userid,comp);//获取询盘人列表
        this.props.actions.getports(userName,token);//获取港口
        this.props.actions.getccto(userName,token,comp);//获取抄送
        this.props.actions.getwtuo(userName,token,comp);//获取委托人
    }
    render() {
        return (
            <div className="inymid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Inquiry">我发出的询盘及对应的回盘</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Backplate">我客人的询盘</Link>
                        </li>
                    </ul>
                </div>
                <div className="newxlist">
                    <Xseach cabnew={this.props.cabnew} text={this.props.text} actions={this.props.actions} getdetil={this.props.getdetil} shows={this.props.shows} getnewlist={this.props.getnewlist}/>
                </div>
            </div>
        );
    }
}