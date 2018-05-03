/**
 * Created by Zing on 2016/8/9.
 */
import React,{Component} from 'react';
import Aseach from './aseach';
import { Link } from 'react-router';

export default class Amid extends Component {
    constructor(props) {
        super(props);
        this.state={
            cons:sessionStorage.getItem("SESSIONSYSCONS")
        }
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let comp = sessionStorage.getItem("SESSIONCOMP");
        this.props.actions.getzxfw(userName,token,2);//获取有具体服务的服务
        this.props.actions.getzxka(userName,token);//获取口岸
        this.props.actions.getzxjtfw(userName,token);//获取具体服务
        this.props.actions.getzxccto(userName,token,comp);//获取抄送人
        this.props.actions.getzxwtuo(userName,token,comp);//获取委托人
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
                <Aseach
                    zxinfo={this.props.zxinfo}
                    actions={this.props.actions}
                    shows={this.props.shows}
                    text={this.props.text}
                    />
            </div>
        );
    }
}