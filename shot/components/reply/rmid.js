/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';
import Rseach from './rseach';
import { Link } from 'react-router';

export default class Rmid extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let comp = sessionStorage.getItem("SESSIONCOMP");
        this.props.actions.gethfka(userName,token);//获取口岸
        this.props.actions.gethffw(userName,token);//获取服务
        this.props.actions.gethfjtfw(userName,token);//获取具体服务
        this.props.actions.gethfccto(userName,token,comp);//获取抄送
        this.props.actions.gethfwtuo(userName,token,comp);//获取委托人
    }
    render() {
        return (
            <div className="mid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Advisory">我发出的咨询及对应的回复</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Reply">我客人的咨询</Link>
                        </li>
                    </ul>
                </div>
                <Rseach actions={this.props.actions}
                        replays={this.props.replays}
                        shows={this.props.shows}
                        text={this.props.text}
                    />
            </div>
        );
    }
}